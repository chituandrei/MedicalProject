import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import Logo from "../images/logo_medwise-removebg-preview.png";
import './SignUp.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import axios from 'axios';

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
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      age: age,
      gender: gender,
      phone_number: phoneNumber
    };
    
    console.log(userData)

    axios.post('http://127.0.0.1:8000/register', userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response from server:', response.data);
      // Pot fi adăugate acțiuni suplimentare aici, cum ar fi redirecționarea către o altă pagină sau afișarea unui mesaj de succes
    })
    .catch(error => {
      console.error('Error registering user:', error);
      // Tratarea erorilor aici, cum ar fi afișarea unui mesaj de eroare către utilizator
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={20} columns={12}>
        <Grid item xs={2} />
        <Grid item xs={4}>{ /* Adjust logo dimension */}
          <div className={'logoContainer'}>
          <img width='450vw' src={Logo} alt="Logo" />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={'mainContainer'}>
            <div className={'titleContainer'}>
              <div>Sign Up</div>
            </div>
            <br />
            <ToggleButtonGroup
              color="primary"
              value={gender}
              exclusive
              onChange={(ev) => setGender(ev.target.value)}
              aria-label="Platform"
            >
              <ToggleButton value={'Male'}><PermIdentityTwoToneIcon /> Male</ToggleButton>
              <ToggleButton value={'Female'}><HealingTwoToneIcon /> Female</ToggleButton>
            </ToggleButtonGroup>
            <br />
            <TextField
              id="first-name-field"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!firstNameError}
              helperText={firstNameError}
            />
            <br />
            <TextField
              id="last-name-field"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!!lastNameError}
              helperText={lastNameError}
            />
            <br />
            <TextField
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
            <TextField
              id="age-field"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              error={!!ageError}
              helperText={ageError}
            />
            <br />
            <TextField
              id="phone-number-field"
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              error={!!phoneNumberError}
              helperText={phoneNumberError}
            />
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