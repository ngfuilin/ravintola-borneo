import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m42w5rd', 'template_3lko8wi', form.current, 'Gd_fCuIAkrtGSVyy2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <div>
                
    <h3>Lähetä viesti</h3>
    <form ref={form} onSubmit={sendEmail} className="flex-container">
        
            <input 
            type="text" 
            name="user_name" required
            placeholder="Nimi" 
            style={{ fontSize: 16, padding: 4, width: 550 }}></input>
        
        
        
        <input 
            type="text" 
            name="user_phone" 
            placeholder="Puhelin" 
            style={{ fontSize: 16, padding: 4, width: 550 }}>
        </input>
      
        
     
        <input 
            type="text" 
            name="user_email" 
            placeholder="Sähköposti" 
            style={{ fontSize: 16, padding: 4, width: 550 }}>
        </input>
      
        <textarea 
            name="message" 
            placeholder="Viesti" 
            style={{ fontSize: 16, padding: 4, width: 550, height: 300 }}>
        </textarea>
      
        <button type="submit" className="btn">Lähetä</button>
    </form>
    </div>
  );
};
