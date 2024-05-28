import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../images/logo_medwise-removebg-preview.png";
import './SignUp.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import FaceIcon from '@mui/icons-material/Face';
import Face3Icon from '@mui/icons-material/Face3';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const navigate = useNavigate();

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

const onRegisterClick = () => {

    const userData = {
      id: uuidv4(), // Generare ID unic pentru utilizator
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      age: age,
      gender: gender,
      phone_number: phoneNumber
    };

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    
    console.log(userData)

    axios.post('http://127.0.0.1:8000/register', userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response from server:', response.data);
      navigate('/thank-you');
    })
    .catch(error => {
      console.error('Error registering user:', error);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={20} columns={12}>
        <Grid item xs={1} />
        <Grid item xs={4}>{ /* Adjust logo dimension */}
        <br />
        <br />
        <br />
          <div className={'logoContainer'}>
          <img width='450vw' src={Logo} alt="Logo" />
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className={'mainContainer'}>
            <div className={'titleContainer'}>
              <div>Sign Up</div>
            </div>
            <br />
            <Grid container spacing={4} columns={2}>
              <Grid item xs={1}>
                <TextField
                  id="first-name-field"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  error={!!firstNameError}
                  helperText={firstNameError}/>
                <br />
                <TextField
                  sx={{
                    margin: "20px 0",
                  }} 
                  id="phone-number-field"
                  label="Phone Number"
                  variant="outlined"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  error={!!phoneNumberError}
                  helperText={phoneNumberError}/>
              </Grid>
              <Grid item xs={1}>
                <TextField
                id="last-name-field"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={!!lastNameError}
                helperText={lastNameError}/>
                <br />
                <TextField
                  sx={{
                    margin: "20px 0",
                  }} 
                  id="age-field"
                  label="Age"
                  variant="outlined"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  error={!!ageError}
                  helperText={ageError}
                />
              </Grid>
            </Grid>
            <TextField
              sx={{
                width: "34vw",
              }} 
              id="email-field"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
            />
            <br />
            <TextField
              sx={{
                width: "34vw",
              }} 
              id="password-field"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              error={!!passwordError}
              helperText={passwordError}
            />
            <br />
            <ToggleButtonGroup
              color="primary"
              value={gender}
              exclusive
              onChange={(ev) => setGender(ev.target.value)}
              aria-label="Platform">
              <ToggleButton value={'Male'} sx={{width: "10vw"}}><FaceIcon /> Male</ToggleButton>
              <ToggleButton value={'Female'} sx={{width: "10vw"}}><Face3Icon /> Female</ToggleButton>
            </ToggleButtonGroup>
            <br />
            <Box sx={{ '& button': { m: 1 } }}>
              <Button variant="contained" size="large" color="secondary" onClick={onRegisterClick}>
                Register
              </Button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;