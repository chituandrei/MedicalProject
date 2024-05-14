import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import logo from './logo.png';
// import { determineAccountType } from './LoginUtils'; 
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';



const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [accountType, setAccountType] = useState('Pacient');

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [typeError, setTypeError] = useState('')
  
  const [emailTag, setEmailTag] = useState('')
  const [passwordTag, setPasswordTag] = useState('')
  const [typeTag, setTypeTag] = useState('')

  const navigate = useNavigate()

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


  const onButtonClick = () => {
     // Set initial error values to empty
    setEmailError('')
    setPasswordError('')
    setEmailTag('')
    setPasswordTag('')
    setTypeError('')
    setTypeTag('')

    // Check if the user has entered fields correctly
    if ('' === accountType) {
      setTypeError('Please select your account type')
      setTypeTag('error')
      return
    }

    if ('' === email) {
      setEmailError('Please enter your email')
      setEmailTag('error')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      setEmailTag('error')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      setPasswordTag('error')
      return
    }

    if (password.length < 8) {
      setPasswordError('The password must be 8 characters or longer')
      setPasswordTag('error')
      return
    }

    if (accountType === 'Pacient') {
      navigate('/pacient');
    } else if (accountType === 'Doctor') {
      navigate('/doctor');
    } else {
      // Handle other account types or errors
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={20} columns={4}>
      <Grid item xs={1}>
        </Grid>
        <Grid item xs={1}>
          <div className={'mainContainer'}>
            <img width='450vw' src={logo} alt="Logo" />
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className={'mainContainer'}> 
            <div className={'titleContainer'}>
              <div>Login</div>
            </div>
            <br />
            <ToggleButtonGroup
              color="primary"
              value={accountType}
              exclusive
              onChange={(ev) => setAccountType(ev.target.value)}
              aria-label="Platform">
              <ToggleButton value={'Pacient'}><PermIdentityTwoToneIcon></PermIdentityTwoToneIcon> Pacient</ToggleButton>
              <ToggleButton value={'Doctor'}><HealingTwoToneIcon></HealingTwoToneIcon> Doctor</ToggleButton>
            </ToggleButtonGroup>
            <br />
            <TextField id="email-field"
              error={emailTag}
              sx={{
                width: 300,
              }} 
              label="Enter your email" 
              variant="outlined" 
              helperText={emailError} 
              value={email} 
              onChange={(ev) => setEmail(ev.target.value)} />
            <br />
            <TextField id="password-field" 
              error={passwordTag}
              sx={{
                width: 300,
              }} 
              label="Enter your password" 
              variant="outlined" 
              helperText={passwordError} 
              value={password} 
              onChange={(ev) => setPassword(ev.target.value)} />
            <br />
            <Box sx={{ '& button': { m: 1 } }}>
              <div>
                <Button variant="contained" size="large" color='secondary' onClick={onButtonClick}>
                  Log In
                </Button>
              </div>
            </Box>
            
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login