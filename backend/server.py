from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from passlib.context import CryptContext
import jwt
import re
from urllib.parse import quote_plus
from utils import *
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

@app.post("/login")
async def login_pacient(user_data: LoginData):
    try:
        # Check if user with the provided email exists
        user = await db[PACIENTI_DB_ACCOUNTS].find_one({"email": user_data.email})
        if user:
            # Verify password
            if verify_password(user_data.password, user["password"]):
                # Authentication successful, return access token or any other data as needed
                # For demonstration purposes, let's return a success message
                return {"message": user["account_type"]}
            else:
                raise HTTPException(status_code=401, detail="Invalid email or password")
        else:
            raise HTTPException(status_code=401, detail="Invalid email or password")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
