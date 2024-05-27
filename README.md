# Medwise

Medwise is a medical application designed to facilitate efficient communication and collaboration between patients and healthcare providers across various domains and hospitals. It provides a comprehensive platform for managing medical history, analyses, investigations, and more.

## Technologies Used

### Frontend:
- **React**: Utilized as the primary library for building the user interface.
- **Styling**: CSS was used for styling components and pages.

### Backend:
- **Python**: Programming language used for backend logic.
- **FastAPI**: Framework used for rapid and efficient API development.
- **Uvicorn**: ASGI server used to run the FastAPI application.

### Database:
- **MongoDB**: NoSQL database used for storing medical data.

## Installation and Setup

### Frontend Dependencies:
Inside the frontend folder:
```
npm install
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled axios react-bootstrap
```

### Backend Dependencies:
```
pip install fastapi uvicorn
```

## Running the Application

### Backend:
To run the backend server:
```
uvicorn server:app --reload
```

### Frontend:
Inside the frontend folder:
```
npm start
```

## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.

## License
This project is licensed under the [MIT License](LICENSE).