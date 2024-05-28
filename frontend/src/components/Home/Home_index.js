import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// Imagini
import medicalImage from "../images/logo_medwise-removebg-preview.png";
import doctor_photo from "../images/doctor.png";
import security_photo from "../images/security.jpg";
import batrana_photo from "../images/batrana.jpg";
import create_account from "../images/create_account.jpg";
import pacient_profile from "../images/pacient_profile.jpg";
import alegere_doctor from "../images/alegere_doctor.jpg";

const steps = [
  {
    label: 'Ghidul Pacientului',
    description: `Pas 1 : crearea contului ca pacient.`,
    imgPath: create_account,
  },
  {
    label: 'Ghidul Pacientului',
    description:
      'Pas 2: introducerea datelor personale pe profilul pacientului.',
      imgPath: pacient_profile,
  },
  {
    label: 'Ghidul Pacientului',
    description: `Pas 3: alegerea doctorului potrivit.`,
    imgPath: alegere_doctor,
  },
];

const HomePage = () => {

  const containerStyle = {
    marginTop: '50px', // sau orice valoare dorești pentru distanță
    borderRadius: '10px', // adăugăm margini rotunde
    border: '2px solid #75A47F', // border colorat
    padding: '20px', // culoarea fundalului
    display: 'flex', // utilizăm flexbox
  };

  const imageStyle = {
    width: '50%', // reducem lățimea imaginii pentru a face loc textului
    height: 'auto',
    borderRadius: '10px',
    marginRight: '20px', // adăugăm o mică margine între imagine și text
  };

  const cardContainerStyle = {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    maxWidth: 'calc(33.33% - 20px)', // se calculează 1/3 din lățimea containerului cu spațiu între carduri
    marginBottom: '20px',
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* zona cu logo si descriere */}
      <Container maxWidth="sm">
        <Box sx={containerStyle}>
          <img src={medicalImage} alt="Medical App" style={imageStyle} />
          <div>
            <Typography variant="h5" component="h2">
              MedWise
            </Typography>
            <Typography variant="body1">  
            Platformă digitală care oferă mediciilor acces rapid și sigur la datele medicale ale pacienților înregistrați. Cu o interfață intuitivă, permite medicilor să acceseze și să gestioneze rapid informațiile critice, facilitând luarea deciziilor informate și îmbunătățind calitatea îngrijirii pacienților.
            </Typography>
          </div>
        </Box>
      </Container>

      {/* container cu beneficii */}
      <Container maxWidth="lg" style={{ marginTop: '80px', marginBottom: '40px',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom style={{ fontFamily: '"Segoe UI"' }}>
          Beneficii ale utilizarii MedWise
        </Typography>
        <Container maxWidth="lg" style={cardContainerStyle}>
          {/* beneficiu 1  */}
          <Card sx={{ ...cardStyle }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={doctor_photo}
                alt="doctors"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Doctorii asociati
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Acces rapid la istoricul complet al pacienților, facilitând diagnosticul precis și planificarea tratamentului în timp util.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* beneficiu 2  */}
          <Card sx={{ ...cardStyle }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={security_photo}
                alt="doctors"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Securitatea datelor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Utilizează cele mai recente tehnologii de securitate cibernetică pentru a proteja confidențialitatea și integritatea informațiilor medicale, respectând reglementările privind confidențialitatea datelor.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* beneficiu 3  */}
          <Card sx={{ ...cardStyle }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={batrana_photo}
                alt="doctors"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Accesibilitate rapida     
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Pacienții pot avea acces la propriile lor date medicale prin intermediul MedWise, ceea ce le permite să-și urmărească evoluția, să-și gestioneze mai eficient propriile lor îngrijiri și să fie mai implicați în procesul de luare a deciziilor legate de sănătatea lor.ff
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Container>
      
      <Box sx={{ maxWidth: 400, maxHeight:400,  flexGrow: 1 , border: '2px solid #75A47F', borderRadius: '10px', marginTop: '80px', marginBottom: '400px',display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      
      <Box sx={{ height: 20, maxWidth: 400, width: '100%', p: 2, display:'flex', marginBottom: '40px' }}>
        {steps[activeStep].description}
      </Box>
      <Box sx={{  marginTop: 200, display:'flex', maxHeight: 300, maxWidth: 300, margin: 'auto'  }}>
      <img src={steps[activeStep].imgPath} alt="Step Image" style={{ maxWidth: '100%', maxHeight: '100%', display:'flex' }} />
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {/* {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )} */}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {/* {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )} */}
            Back
          </Button>
        }
      />
    </Box>
    </React.Fragment>
  );
}

export default HomePage;
