import React, { useState, useEffect } from 'react';
import './DoctorList.css';
import UserProfileCard from './UserProfileCard';
import imagefemeie from '../images/cover.jpg';
import imagebarbat from '../images/logo.png';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const DoctorList = (props) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/get_all_doctors');
        setDoctors(response.data.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const halfLength = Math.ceil(doctors.length / 2);
  const firstHalfDoctors = doctors.slice(0, halfLength);
  const secondHalfDoctors = doctors.slice(halfLength);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateRandomDescription = () => {
    const descriptions = [
      "Este un medic dedicat care oferă îngrijire excelentă și compasiune pacienților săi.",
      "Expert în domeniul său, cu o atenție deosebită la detalii și la nevoile pacienților.",
      "Își pune întotdeauna pacienții pe primul loc și se asigură că primesc tratamentul adecvat și îngrijirea necesară.",
      "Cu o experiență vastă și o pasiune pentru medicină, este un doctor pe care pacienții săi îl pot încredința cu încredere.",
      "Cu abilități excelente de comunicare și o atitudine empatică, face ca pacienții să se simtă confortabil și în siguranță.",
      "Este un profesionist dedicat care se străduiește să ofere cele mai bune soluții și tratamente pentru pacienții săi.",
      "Cu o pregătire solidă și o pasiune pentru medicină, este mereu la curent cu cele mai recente descoperiri și tehnici medicale."
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  return (
    <div className="App">
      <div className="user-profile-cards-container">
        <Grid container spacing={4} columns={4}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}>
            {firstHalfDoctors.map((doctor, index) => (
              <UserProfileCard 
                key={doctor.email} // using email as unique key
                name={`Dr. ${doctor["First Name"]} ${doctor["Last Name"]}`}
                description1={doctor["Specialization"] ? doctor["Specialization"].toUpperCase() : ""}
                description2={`Years of Experience: ${getRandomNumber(7, 15)}`}
                description3={generateRandomDescription()}
                email={doctor["Email"]}
                imageSrc={doctor["Gender"] === "Female" ? imagefemeie : imagebarbat}
              />
            ))}
          </Grid>
          <Grid item xs={1}>
            {secondHalfDoctors.map((doctor, index) => (
              <UserProfileCard 
                key={doctor.email} // using email as unique key
                name={`Dr. ${doctor["First Name"]} ${doctor["Last Name"]}`}
                description1={doctor["Specialization"] ? doctor["Specialization"].toUpperCase() : ""}
                description2={`Years of Experience: ${getRandomNumber(7, 15)}`}
                description3={generateRandomDescription()}
                email={doctor["Email"]}
                imageSrc={doctor["Gender"] === "Female" ? imagefemeie : imagebarbat}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DoctorList;
