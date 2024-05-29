import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import axios from 'axios';
import { getAccountType, getUserId } from '../auth_context/UserContext'; // Importăm funcția getUserId din modulul UserContext
import { useNavigate } from 'react-router-dom'

const options = ['OI', 'AII', 'BIII', 'ABIV'];

const EditeazaProfil = () => {
  const [grupaSange, setGrupaSange] = useState(options[0]);
  const [medicamente, setMedicamente] = useState('');
  const [vaccinuri, setVaccinuri] = useState('');
  const navigate = useNavigate()

  const handleUpdateProfil = async () => {
    const id = getUserId(); // Obținem ID-ul utilizatorului folosind funcția importată
    console.log('ID before updating profile:', id);
    if (id) {
      try {
        console.log('User ID:', id);
        const updatedPacient = {
          grupa_de_sange: grupaSange,
          medicamente: medicamente,
          vaccinuri: vaccinuri
        };

        const response = await axios.post(`http://127.0.0.1:8000/publish_pacienti/analize/${id}`, updatedPacient, id); // Folosim ID-ul obținut pentru a face cererea POST
        console.log('Profil actualizat:', response.data);
        
        navigate('/pacient'); // Navigăm către pagina /pacient după actualizare
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    } else {
      console.error('User ID is null');
    }
  };

  

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
          <div>
            <br />
            <Autocomplete
              value={grupaSange}
              onChange={(event, newValue) => {
                setGrupaSange(newValue);
              }}
              id="controllable-states-demo"
              options={options}
              sx={{
                width: 300,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#FF90BC',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FF90BC',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF90BC',
                  },
                },
                '& .MuiInputLabel-root': {
                  '&.Mui-focused': {
                    color: '#FF90BC',
                  },
                },
              }}
              renderInput={(params) => <TextField {...params} label="Grupa de sânge" />}
            />
          </div>
          <br />
          <TextField
            id="outlined-basic"
            label="Medicamente"
            variant="outlined"
            value={medicamente}
            onChange={(e) => setMedicamente(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF90BC',
                },
                '&:hover fieldset': {
                  borderColor: '#FF90BC',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF90BC',
                },
              },
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: '#FF90BC',
                },
              },
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Vaccinuri"
            variant="outlined"
            value={vaccinuri}
            onChange={(e) => setVaccinuri(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF90BC',
                },
                '&:hover fieldset': {
                  borderColor: '#FF90BC',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF90BC',
                },
              },
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: '#FF90BC',
                },
              },
            }}
          />
          <br />
          <div>
            <Button
              variant="contained"
              size="large"
              onClick={handleUpdateProfil}
              sx={{
                backgroundColor: '#FF90BC',
                '&:hover': {
                  backgroundColor: '#FFC0D9',
                },
              }}
            >
              Profil Editat
            </Button>
          </div>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default EditeazaProfil;
