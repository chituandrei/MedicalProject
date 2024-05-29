// SignupPage.js
import React, { useState, useEffect } from 'react';
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
import axios from 'axios';



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
      <MyIcon gender={pacient["Gender"]} />
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
        FirstName: {pacient["First Name"]}
        <br />
        LastName: {pacient["Last Name"]}
        <br />
        Age: {pacient["Age"]}
        <br />
        Gender: {pacient["Gender"]}
        <br />
        Blood Type: {pacient["Blood Type"]}
        <br />
        Medications: {pacient["Medications"]}
        <br />
        Vaccines: {pacient["Vaccines"]}
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
  const [pacients, setPacients] = useState([]);

  useEffect(() => {
    const fetchPacients = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/get_all_pacients');
        setPacients(response.data.data);
      } catch (error) {
        console.error('Error fetching pacients:', error);
      }
    };

    fetchPacients();
  }, []);

  const halfLength = Math.ceil(pacients.length / 2);
  const firstHalfPacients = pacients.slice(0, halfLength);
  console.log(firstHalfPacients)
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
              <Box key={pacient.Email} sx={{ width: 300, mb: 2 }}>
                <CardComponent pacient={pacient} />
              </Box>
            ))}
          </Grid>
          <Grid item xs={1}>
            {pacients.slice(halfLength).map((pacient) => (
              <Box key={pacient.Email} sx={{ width: 300, mb: 2 }}>
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