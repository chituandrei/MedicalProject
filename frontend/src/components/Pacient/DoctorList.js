import React from 'react';
import './DoctorList.css'
import UserProfileCard from './UserProfileCard';
import imagefemeie from '../images/cover.jpg';
import imagebarbat from '../images/logo.png';
import Grid from '@mui/material/Grid';

const DoctorList = (props) => {
  const doctors = [
    {
      "_id":{"$oid":"6654e9dfab6df49a913f76e7"},
      "first_name":"Elena",
      "last_name":"Ionita",
      "email":"ionitaelena557@gmail.com",
      "password":"$2b$12$AZ0ozXmtcGO4jzpQ/.UCH.I7m7iu6klLx.WjJm2EnNUCy26//oFsm",
      "age":"23",
      "gender":"Female",
      "phone_number":"0744272599",
      "account_type":"Doctor",
      "specialitate":"CHIRURGIE",
      "descriere":"Ramură a medicinei care tratează bolile prin intervenții operatorii."
    },
    {
      "_id":{"$oid":"6654e9dfab6df49a913f76e7"},
      "first_name":"Elena",
      "last_name":"Ionita",
      "email":"ionitaelena557@gmail.com",
      "password":"$2b$12$AZ0ozXmtcGO4jzpQ/.UCH.I7m7iu6klLx.WjJm2EnNUCy26//oFsm",
      "age":"23",
      "gender":"Female",
      "phone_number":"0744272599",
      "account_type":"Doctor",
      "specialitate":"CHIRURGIE",
      "descriere":"Ramură a medicinei care tratează bolile prin intervenții operatorii."
    },
    {
      "_id":{"$oid":"6654e9dfab6df49a913f76e7"},
      "first_name":"Elena",
      "last_name":"Ionita",
      "email":"ionitaelena557@gmail.com",
      "password":"$2b$12$AZ0ozXmtcGO4jzpQ/.UCH.I7m7iu6klLx.WjJm2EnNUCy26//oFsm",
      "age":"23",
      "gender":"Female",
      "phone_number":"0744272599",
      "account_type":"Doctor",
      "specialitate":"CHIRURGIE",
      "descriere":"Ramură a medicinei care tratează bolile prin intervenții operatorii."
    },
  ];

  const halfLength = Math.ceil(doctors.length / 2);
  const firstHalfDoctors = doctors.slice(0, halfLength);
  const secondHalfDoctors = doctors.slice(halfLength);

  return (
    <div className="App">
      <div className="user-profile-cards-container">
        <Grid container spacing={4} columns={4}>
          <Grid item xs={1}>
            </Grid>
          <Grid item xs={1}>
            {firstHalfDoctors.map((doctor, index) => (
              <UserProfileCard 
                key={index}
                name={`Dr. ${doctor.first_name} ${doctor.last_name}`}
                description1={doctor.specialitate.toUpperCase()}
                description2={doctor.descriere}
                email={doctor.email}
                imageSrc={doctor.gender === "Female" ? imagefemeie : imagebarbat}
              />
            ))}
          </Grid>
          <Grid item xs={1}>
            {secondHalfDoctors.map((doctor, index) => (
              <UserProfileCard 
                key={index}
                name={`Dr. ${doctor.first_name} ${doctor.last_name}`}
                description1={doctor.specialitate.toUpperCase()}
                description2={doctor.descriere}
                email={doctor.email}
                imageSrc={doctor.gender === "Female" ? imagefemeie : imagebarbat}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DoctorList;