from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi import HTTPException
from pydantic import BaseModel

import json
from config import *

# Inițializarea aplicației FastAPI
app = FastAPI()

# Permite accesul din toate originile
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Definirea dicționarului JSON ca o variabilă în Python
user_test = {
    "users": [
        {
            "first_name": "John",
            "last_name": "Doe",
            "email": "john.doe@example.com",
            "password": "hashed_password",
            "age": 30,
            "gender": "male",
            "phone_number": "+1234567890"
        },
        {
            "first_name": "Jane",
            "last_name": "Smith",
            "email": "jane.smith@example.com",
            "password": "hashed_password",
            "age": 25,
            "gender": "female",
            "phone_number": "+1987654321"
        }
    ]
}



# Definirea unui endpoint GET
# Endpoint GET pentru a obține datele pacienților
@app.get("/")
async def get_patients():
    return {"collections": db.list_collection_names()}

class User(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    age: str    
    gender:str
    phone_number: str

@app.post("/register")
async def register_user(user: User):
    # Add any additional processing or validation here if needed
    data_dict = user.dict()
    #db["test"].insert_one(data_dict)
    db["test"].insert_one()
    if "users" not in db.list_collection_names():
        db.create_collection("users")
    return user

@app.post("/patients/")
async def insert_account(patient):
    'This function takes as parameter a patient dictionary and inserts it into database'
    try:
        result = await db[PATIENTS_ACCOUNTS_COLLECTION].insert_one(patient)
        if result.acknowledged:
            return {"message": "Patient created successfully"}
        else:
            raise HTTPException(status_code=500, detail="Failed to create patient")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Dacă acest script este rulat ca un script standalone, se va porni serverul FastAPI
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)