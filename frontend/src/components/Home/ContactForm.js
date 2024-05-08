import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Logo from "/home/alex/MedicalApp/MedicalProject/frontend/src/components/Home/logo_medwise-removebg-preview.png";


const ContactForm = () => {
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [stateMessage, setStateMessage] = useState(null);
        const sendEmail = (e) => {
          e.persist();
          e.preventDefault();
          setIsSubmitting(true);
          emailjs
            .sendForm(
              'service_guziibq',
              'template_seels8g',
              e.target,
              '171ngBfy4ktnoo77y'
            )
            .then(
              (result) => {
                setStateMessage('Message sent!');
                setIsSubmitting(false);
                setTimeout(() => {
                  setStateMessage(null);
                }, 5000); // hide message after 5 seconds
              },
              (error) => {
                setStateMessage('Something went wrong, please try again later');
                setIsSubmitting(false);
                setTimeout(() => {
                  setStateMessage(null);
                }, 5000); // hide message after 5 seconds
              }
            );
          
          // Clears the form after sending the email
          e.target.reset();
        };
        return (
    
          <form onSubmit={sendEmail} style={{ maxWidth: '400px', margin: 'auto' }}>
            <div style = {{margin: '15px'}}>
              <h3 style={{ fontFamily: 'Pacifico, cursive', color: '#212529', fontSize: '1.5rem', margin : '10px' }} >Contact Us</h3>
              <h11 style={{ fontFamily: 'Pacifico, cursive', color: '#212529' }} >Ai o întrebare? Trimite-ne un mesaj!</h11>
            </div>

            <div style={{ border: '2px solid #82A284', maxWidth: '800px', margin: 'auto', padding: '20px', borderRadius: '8px'}}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }} ></label>
                <input type="text" 
                      name="user_name" 
                      placeholder="Nume"
                      style={{border: '2px solid #82A284', borderRadius: '8px', padding: '5px'}}
                      />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }} ></label>
                <input type="email" 
                      name="user_email" 
                      placeholder="E-mail"
                      style={{border: '2px solid #82A284', borderRadius: '8px', padding: '5px'}}
                      />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }} ></label>
                <textarea name="message" 
                placeholder="Mesaj"
                style={{border: '2px solid #82A284', borderRadius: '8px', padding: '5px'}}
                />
              </div>
              
              <input type="submit" 
                    value="Send" 
                    disabled={isSubmitting} 
                    style={{
                      backgroundColor: '#E8DFCA',
                      color: '#82A284',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '8px', // Added border radius to match other elements
                      cursor: 'pointer'
                  }}
                    />
              {stateMessage && <p>{stateMessage}</p>}
        
              <img src={Logo} alt="Logo" style={{ maxWidth: '200px', flex: '1', display: 'flex', justifyContent: 'flex-end'  }}/>
               
            </div>
          </form>
          
        );
      };
      export default ContactForm;