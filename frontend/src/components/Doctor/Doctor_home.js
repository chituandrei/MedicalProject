// SignupPage.js
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Doctor.css'
import logo from '../images/logo_medwise-removebg-preview.png';
import FaceIcon from '@mui/icons-material/Face';
import Face3Icon from '@mui/icons-material/Face3';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const MyIcon = ({ gender }) => {
  if (gender === "Male") {
    return <FaceIcon color="primary" />;
  } else {
    return <Face3Icon color="secondary" />;
  }
};

const MyButton = ({ gender }) => {
  if (gender === "Male") {
    return (
      <div>
        <a href="/MedicalProject/my_pacient" style={{ textDecoration: 'none' }}>
          <Button size="small" color='secondary'>Medical History</Button>
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <a href="/MedicalProject/my_pacient" style={{ textDecoration: 'none' }}>
          <Button size="small" color='secondary'>Medical History</Button>
        </a>
      </div>
    );
  }
};

const CardComponent = ({ pacient }) => (
  <Card variant="outlined">
    <CardContent>
      <MyIcon gender={pacient.gender} />
      <Typography variant="h5" component="div">
        {pacient.first_name} {pacient.last_name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {pacient.email}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {pacient.phone_number}
      </Typography>
      <Typography variant="body2">
        Age: {pacient.age}
        <br />
        Gender: {pacient.gender}
        <br />
        Blood Type: {pacient.grupa_de_sange}
        <br />
        Medications: {pacient.medicamente}
        <br />
        Vaccines: {pacient.vaccinuri}
      </Typography>
    </CardContent>
    {/* <CardActions>
      <MyButton gender={pacient.gender} />
    </CardActions> */}
  </Card>
);

const theme = createTheme({
  palette: {
    primary: {
      light: '#a5c98a',
      main: '#3e997a',
      dark: '#07634d',
      contrastText: '#e55188',
    },
    secondary: {
      light: '#f5c7d6',
      main: '#e2709d',
      dark: '#e35289',
      contrastText: '#066048',
    },
  },
});

const DoctorHomePage = () => {
  const pacients = [
    {
      "_id":{"$oid":"6654e9dfab6df49a913f76e7"},
      "first_name":"Andrei",
      "last_name":"Chitu",
      "email":"andreichitu38@yahoo.com",
      "password":"$2b$12$AZ0ozXmtcGO4jzpQ/.UCH.I7m7iu6klLx.WjJm2EnNUCy26//oFsm",
      "age":"23",
      "gender":"Male",
      "phone_number":"0744272599",
      "account_type":"Pacient"
    },
    {
      "_id":{"$oid":"6655f82784e26f1b49db3879"},
      "id":"c9f600bb-59c9-4309-87a5-6b32aaa628de",
      "first_name":"bla",
      "last_name":"bla",
      "email":"blabla@gmail.com",
      "password":"$2b$12$j4Q9fxXqq0D0p0q0aipuTe30mXR2C9J6zwUV7RGf7AIYcCS5yhPv.",
      "age":"30",
      "gender":"Female",
      "phone_number":"0712345678",
      "account_type":"Pacient"
    },
    {
      "_id":{"$oid":"6655f82784e26f1b49db3879"},
      "id":"c9f600bb-59c9-4309-87a5-6b32aaa628de",
      "first_name":"yuhu",
      "last_name":"bla",
      "email":"blabla@gmail.com",
      "password":"$2b$12$j4Q9fxXqq0D0p0q0aipuTe30mXR2C9J6zwUV7RGf7AIYcCS5yhPv.",
      "age":"30",
      "gender":"Male",
      "phone_number":"0712345678",
      "account_type":"Pacient"
    },
    {
      "_id":{"$oid":"6655f82784e26f1b49db3879"},
      "id":"c9f600bb-59c9-4309-87a5-6b32aaa628de",
      "first_name":"lalalla",
      "last_name":"bla",
      "email":"blabla@gmail.com",
      "password":"$2b$12$j4Q9fxXqq0D0p0q0aipuTe30mXR2C9J6zwUV7RGf7AIYcCS5yhPv.",
      "age":"30",
      "gender":"Female",
      "phone_number":"0712345678",
      "account_type":"Pacient"
    },
    {
      "_id":{"$oid":"6655f82784e26f1b49db3879"},
      "id":"c9f600bb-59c9-4309-87a5-6b32aaa628de",
      "first_name":"adfaddf",
      "last_name":"dfafa",
      "email":"blabla@gmail.com",
      "password":"$2b$12$j4Q9fxXqq0D0p0q0aipuTe30mXR2C9J6zwUV7RGf7AIYcCS5yhPv.",
      "age":"30",
      "gender":"Male",
      "phone_number":"0712345678",
      "account_type":"Pacient"
    }
  ];

  const halfLength = Math.ceil(pacients.length / 2);
  const firstHalfPacients = pacients.slice(0, halfLength);
  return (
    <ThemeProvider theme={theme}>
    <div className={'mainCont'}>
      <br />
      <img width='300vw' src={logo} alt="Logo" />
      <h1>Welcome! Your patients need you!</h1>
      <br />
      <Grid container spacing={1} columns={4}>
      <Grid item xs={1}>
        </Grid>
        <Grid item xs={1}>
          {firstHalfPacients.map((pacient) => (
            <Box key={pacient._id.$oid} sx={{ width: 300, mb: 2 }}>
              <CardComponent pacient={pacient} />
            </Box>
          ))}
        </Grid>
        <Grid item xs={1}>
          {pacients.slice(halfLength).map((pacient) => (
            <Box key={pacient._id.$oid} sx={{ width: 300, mb: 2 }}>
              <CardComponent pacient={pacient} />
            </Box>
          ))}
        </Grid>
      </Grid>
      
    </div>
    </ThemeProvider>
  );
}

export default DoctorHomePage;