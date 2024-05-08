import React from 'react';
import Logo from "/home/alex/MedicalApp/MedicalProject/frontend/src/components/Home/logo_medwise-removebg-preview.png";
import backgroundImage from "/home/alex/MedicalApp/MedicalProject/frontend/src/components/Home/cover.jpg";
import './index.css';
import ContactForm from './ContactForm';

const HomePage = () => {

  return (
    <div>
      {/* Add login form and other components */}
      {/* <img src={Logo}  height={350}
          width={350} class="center_logo"/> */}
      <ContactForm />
    </div>
  );
}

export default HomePage;