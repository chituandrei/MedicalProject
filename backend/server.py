from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from passlib.context import CryptContext
import jwt
import re
from urllib.parse import quote_plus
from utils import *
from typing import Optional
import uuid

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# MongoDB Configuration
username = quote_plus('Bazadate')
password = quote_plus('Bazadate')
connection_string = f"mongodb+srv://{username}:{password}@medicaldb.m0kcn6o.mongodb.net/?retryWrites=true&w=majority&appName=MedicalDB"
DATABASE_NAME = "MedWiseDB"
PACIENTI_DB_ACCOUNTS = "Accounts_Pacients"
ANALIZE_DB_PACIENTI = "Med_Info_Pacients"

# JWT Configuration
SECRET_KEY = "secret"
ALGORITHM = "HS256"

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Initialize MongoDB client
client = AsyncIOMotorClient(connection_string)

# Initialize database
db = client[DATABASE_NAME]

async def initialize_database():
    if "Accounts_Pacients" not in await db.list_collection_names():
        await db.create_collection("Accounts_Pacients")
    if "Med_Info_Pacients" not in await db.list_collection_names():
        await db.create_collection("Med_Info_Pacients")

@app.on_event("startup")
async def startup_event():
    await initialize_database()

@app.get("/")
async def start():
    # Așteaptă rezultatul funcției asincrone folosind await
    collections = await db.list_collection_names()
    return {"collections": collections}

class Pacient(BaseModel):
    id: str
    first_name: str
    last_name: str
    email: str
    password: str
    age: str
    gender: str
    phone_number: str

class PatientDetails(BaseModel):
    grupa_de_sange: str
    medicamente: str
    vaccinuri: str

class LoginData(BaseModel):
    email: str
    password: str

@app.post("/register")
async def register_user(user_data: Pacient):

    if not is_valid_email(user_data.email):
        raise HTTPException(status_code=400, detail="Invalid email format")

    hashed_pass = get_password_hash(user_data.password)
    
    existing_user = await db[PACIENTI_DB_ACCOUNTS].find_one({"email": user_data.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username or email already registered")

    try:

        # Insert user data into the "pacients" collection
        db[PACIENTI_DB_ACCOUNTS].insert_one({
            "id" : user_data.id,
            "first_name": user_data.first_name,
            "last_name": user_data.last_name,
            "email": user_data.email,
            "password": hashed_pass,
            "age": user_data.age,
            "gender": user_data.gender,
            "phone_number": user_data.phone_number,
            "account_type": "Pacient"
        })
        return {"message": "User registered successfully"}
    except Exception as e:
        # Handle any exceptions that might occur during insertion
        raise HTTPException(status_code=500, detail=str(e))

class LoginResponse(BaseModel):
    account_id: str
    account_type: str

@app.post("/login", response_model=LoginResponse)
async def login_pacient(user_data: LoginData):
    try:
        # Check if user with the provided email exists
        user = await db[PACIENTI_DB_ACCOUNTS].find_one({"email": user_data.email})
        if user:
            # Verify password
            if verify_password(user_data.password, user["password"]):
                # Authentication successful, return account ID and type
                return {"account_id": str(user["id"]), "account_type": user["account_type"]}
            else:
                raise HTTPException(status_code=401, detail="Invalid email or password")
        else:
            raise HTTPException(status_code=401, detail="Invalid email or password")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/publish_pacienti/analize/{patient_id}")
async def publish_patient_details(patient_details: PatientDetails, patient_id):
    try:
        # Check if patient_id exists in the database
        patient_data = await db[PACIENTI_DB_ACCOUNTS].find_one({"id": patient_id})
        if patient_data:
            # If patient_id exists, update the record
            await db[PACIENTI_DB_ACCOUNTS].update_one({"id": patient_id}, {"$set": patient_details.dict()})
            return {"message": "Patient details published successfully"}

        return {"message" : "Patient not found"}
    except Exception as e:
        return {"error": str(e)}

@app.get("/get_pacient/analize/{patient_id}")
async def get_pacient_analize(patient_id: str):
    try:
        pacient_data = await db[PACIENTI_DB_ACCOUNTS].find_one({"id": patient_id})

        if pacient_data:
            return {
                "message": "Pacient data found",
                "data": {
                    "grupa_sange": pacient_data.get("grupa_de_sange", "undefined"),
                    "medicamente": pacient_data.get("medicamente", "undefined"),
                    "vaccinuri": pacient_data.get("vaccinuri", "undefined"),
                }
            }
        else:
            return {"message": "Pacient data not found"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/get_pacient_data/{pacient_id}")
async def get_pacient_data(pacient_id: str):
    try:
        
        pacient_data = await db[PACIENTI_DB_ACCOUNTS].find_one({"id": pacient_id})

        if pacient_data:
            return {
                "message": "Pacient data found",
                "data": {
                    "First Name": pacient_data.get("first_name", "undefined"),
                    "Last Name": pacient_data.get("last_name", "undefined"),
                    "Email": pacient_data.get("email", "undefined"),
                    "Phone Number": pacient_data.get("phone_number", "undefined"),
                    "Gender": pacient_data.get("gender", "undefined"),
                    "Age": pacient_data.get("age", "undefined")
                }
            }

        else:
            return {"message": "Pacient data not found"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Rută pentru a obține toți pacienții
@app.get("/get_all_pacients")
async def get_all_pacients():
    try:
        pacients = await db[PACIENTI_DB_ACCOUNTS].find().to_list(1000)
        formatted_pacients = []
        for pacient in pacients:
            if pacient.get("account_type") == 'Pacient':
                formatted_pacients.append({
                    "First Name": pacient.get("first_name", "undefined"),
                    "Last Name": pacient.get("last_name", "undefined"),
                    "Email": pacient.get("email", "undefined"),
                    "Phone Number": pacient.get("phone_number", "undefined"),
                    "Gender": pacient.get("gender", "undefined"),
                    "Age": pacient.get("age", "undefined"),
                    "Blood Type": pacient.get("grupa_de_sange", "undefined"),
                    "Medications": pacient.get("medicamente", "undefined"),
                    "Vaccines": pacient.get("vaccinuri", "undefined")
                })
        return {"data": formatted_pacients}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Rută pentru a obține toți doctorii
@app.get("/get_all_doctors")
async def get_all_doctors():
    try:
        doctors = await db[PACIENTI_DB_ACCOUNTS].find().to_list(1000)
        formatted_doctors = []
        for doctor in doctors:
            if doctor.get("account_type") == 'Doctor':
                formatted_doctors.append({
                    "First Name": doctor.get("first_name", "undefined"),
                    "Last Name": doctor.get("last_name", "undefined"),
                    "Email": doctor.get("email", "undefined"),
                    "Gender": doctor.get("gender", "undefined"),
                    "Specialization": doctor.get("specialitate", "undefined"),
                })
        return {"data": formatted_doctors}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))