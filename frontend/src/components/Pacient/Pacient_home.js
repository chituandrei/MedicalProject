import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import axios from 'axios';
import { getUserId } from '../auth_context/UserContext';

const PacientHomePage = () => {
  const [pacientData, setPacientData] = useState(null);

  useEffect(() => {
    const getPacientData = async () => {
      try {
        const id = getUserId(); // Obținem ID-ul utilizatorului folosind funcția importată
        const response = await axios.get(`http://127.0.0.1:8000/get_pacient_data/${id}`);
        console.log(response.data); // Adaugă acest console.log pentru a vedea datele primite de la server
        setPacientData(response.data.data);
      } catch (error) {
        console.error('Error fetching pacient data:', error);
      }
    };

    const id = getUserId(); // Obținem ID-ul utilizatorului folosind funcția importată
    if (id) {
      getPacientData(); // Apelăm funcția pentru a obține datele pacientului dacă ID-ul este disponibil
    }
  }, []); // Nu mai avem nevoie de `userData.id` ca dependență, deoarece obținem ID-ul direct din modulul userSession

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '50px',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: 'white',
            border: '2px solid green',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
            width: '50%',
          }}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BadgeOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`First Name: ${pacientData?.["First Name"]}`} secondary={`Last Name: ${pacientData?.last_name}`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AlternateEmailOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Email: ${pacientData?.["Email"]}`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalPhoneOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Phone Number: ${pacientData?.["Phone Number"]}`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WcOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Gender: ${pacientData?.["Gender"]}`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <CakeOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Age: ${pacientData?.["Age"]}`} />
            </ListItem>
          </List>
        </Container>
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: 'white',
            border: '2px solid green',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
            width: '50%',
          }}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BloodtypeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Blood Type" secondary={pacientData?.blood_type || 'Empty'} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MedicationLiquidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Medications" secondary={pacientData?.medications || 'Empty'} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <VaccinesIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vaccines" secondary={pacientData?.vaccines || 'Empty'} />
            </ListItem>
          </List>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#FF90BC',
              marginTop: '20px',
              '&:hover': {
                backgroundColor: '#FFC0D9',
              },
            }}
          >
            Edit Profile
          </Button>
        </Container>
      </Box>
      <br />
      <div>
        <a href="/MedicalProject/doctor_list" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#FF90BC',
              '&:hover': {
                backgroundColor: '#FFC0D9',
              },
            }}
          >
            Pacient Profile
          </Button>
        </a>
      </div>
    </React.Fragment>
  );
}

export default PacientHomePage;