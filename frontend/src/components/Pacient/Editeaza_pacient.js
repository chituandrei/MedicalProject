import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const initialPacient = {
  "_id": { "$oid": "66560f75734a6fd7b62d9d14" },
  "first_name": "Alexandra",
  "last_name": "Popescu",
  "email": "popescualexandra1602@gmail.com",
  "password": "$2b$12$./ElAE9fJT2k4Q0xEUZFkuFj6oBThHlZRV3oVjAF8jAmxp6Fry8ca",
  "age": "21",
  "gender": "Male",
  "phone_number": "0745361011",
  "grupa_de_sange": "",
  "medicamente": "",
  "vaccinuri": ""
};

const options = ['OI', 'AII', 'BIII', 'ABIV'];

const EditeazaProfil = () => {
  const [pacient, setPacient] = useState(initialPacient);
  const [grupaSange, setGrupaSange] = useState(options[0]);
  const [inputGrupaSange, setInputGrupaSange] = useState('');
  const [medicamente, setMedicamente] = useState('');
  const [vaccinuri, setVaccinuri] = useState('');

  const handleUpdateProfil = () => {
    const updatedPacient = {
      ...pacient,
      grupa_de_sange: grupaSange,
      medicamente: medicamente,
      vaccinuri: vaccinuri
    };
    setPacient(updatedPacient);
    console.log("Profil actualizat:", updatedPacient);
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
              inputValue={inputGrupaSange}
              onInputChange={(event, newInputValue) => {
                setInputGrupaSange(newInputValue);
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
              renderInput={(params) => <TextField {...params} label="Grupa de sange" />}
            />
          </div>
          <br />
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
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
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Medicamente"
              variant="outlined"
              value={medicamente}
              onChange={(e) => setMedicamente(e.target.value)}
            />
          </Box>
          <br />
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
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
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Vaccinuri"
              variant="outlined"
              value={vaccinuri}
              onChange={(e) => setVaccinuri(e.target.value)}
            />
          </Box>
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
          <br />
          {/* <pre>{JSON.stringify(pacient, null, 2)}</pre> */}
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default EditeazaProfil;