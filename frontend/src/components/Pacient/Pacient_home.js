import React from 'react';
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

const pacient = [
  {
    "_id":{"$oid":"66560f75734a6fd7b62d9d14"},
    "first_name":"Alexandra",
    "last_name":"Popescu",
    "email":"popescualexandra1602@gmail.com",
    "password":"$2b$12$./ElAE9fJT2k4Q0xEUZFkuFj6oBThHlZRV3oVjAF8jAmxp6Fry8ca",
    "age":"21",
    "gender":"Male",
    "phone_number":"0745361011",
    "account_type":"Pacient"
  }
];

const PacientHomePage = () => {
  const firstPacient = pacient[0];

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
            width: '50%', // Latimea containerului parinte
          }}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BadgeOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={firstPacient.first_name} secondary={firstPacient.last_name} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AlternateEmailOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={firstPacient.email} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalPhoneOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={firstPacient.phone_number} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WcOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={firstPacient.gender} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <CakeOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={firstPacient.age} />
            </ListItem>
          </List>
        </Container>
        {/* Al doilea container */}
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
            width: '50%', // Latimea containerului parinte
          }}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BloodtypeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Grupa de sange" secondary="Empty" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MedicationLiquidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Medicamente" secondary="Empty" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <VaccinesIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vaccinuri" secondary="Empty" />
            </ListItem>
          </List>
          <div>
          <a href="/MedicalProject/editeaza_pacient" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#FF90BC', // Change this color to your desired color
                '&:hover': {
                  backgroundColor: '#FFC0D9', // Change this color to your desired hover color
                },
              }}
            >
              Profilul Pacientului
            </Button>
          </a>
        </div>
        </Container>
      </Box>
      <br />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
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
            Vizualizeaza doctorii
          </Button>
        </a>
      </Box>
    </React.Fragment>
  );
}

export default PacientHomePage;