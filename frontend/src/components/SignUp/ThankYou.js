import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../images/logo_medwise-removebg-preview.png";

const ThankYouPage = () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#a5c98a',
        main: '#3e997a',
        dark: '#07634d',
        contrastText: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} textAlign="center">
          <img src={Logo} alt="Logo" style={{ width: 200 }} />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4" color="primary" gutterBottom>
            Thank You for Registering with MedWise!
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="body1" color="textPrimary" paragraph>
            We are thrilled to have you join us. Welcome aboard!
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button variant="contained" size="large" color="primary" component={Link} to="/">
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ThankYouPage;
