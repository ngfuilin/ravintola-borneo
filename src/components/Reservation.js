import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Reservation = () => {

    const form = useRef();

    const [error, setError] = useState(false); 

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [dd, setDd] = useState(date)
      
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m42w5rd','template_04hrl78', form.current, 'Gd_fCuIAkrtGSVyy2')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <>
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label for="txtguestname" className="label_block">Nimi </label>
                <input 
                id="txtguestname"
                type="text" 
                name="guest_name" required
                style={{ fontSize: 16, padding: 4, width: 550, marginBottom:"20px" }}></input>   
            </div>   
            <div>
                <label for="txtguestphone" className="label_block">Puhelinnumero </label>
                <input 
                    id="txtguestphone"
                    type="text" 
                    name="guest_phone" required
                    style={{ fontSize: 16, padding: 4, width: 550 , marginBottom:"20px"}}>
                </input>  
            </div>   
            <div> 
                <label for="txtguestemail" className="label_block">Sähköposti </label>
                <input 
                    id="txtguestemail"
                    type="text" 
                    name="guest_email"  required
                    style={{ fontSize: 16, padding: 4, width: 550, marginBottom:"20px" }}>
                </input>
            </div>
            <div>
                <label for="txtguestbookingdate" className="label_block">Varauksen päivämäärä </label>
                <input 
                    id="txtguestbookingdate"
                    type="date" 
                    name="guest_bookingdate" required
                    onChange={e => setDd(e.currentTarget.value)}
                    min="2022-09-08"
                    style={{ fontSize: 16, padding: 4, width: 550 , marginBottom:"20px"}}>
                                   
                </input>
                
            </div>
            <div>
                <label for="txtStartTT" className="label_block">Aika alkaa</label>
            </div>
            <div className='split_time'>
                <div className='box'>
                    <input id="txtStartTT"
                        type="text"
                        name="guest_startTT" required
                        style={{ fontSize: 16, padding: 4, width: 50}}>
                    </input>
                    <label>TT</label>
                </div>
                <div className="box">
                    <label className='label_colon'>:</label>
                </div>
                <div className="box">
                    <input id="txtStartMM"
                            type="text"
                            name="guest_startMM" required
                            style={{ fontSize: 16, padding: 4, width: 50 }}>
                    </input>
                    <label>MM</label>
                </div>
            </div>
            <div>
                <label for="txtEndTT" className="label_block">Aika paattyy</label>
            </div>
            <div className='split_time'>
                <div className='box'>
                    <input id="txtEndTT"
                        type="text"
                        name="guest_endTT" required
                        style={{ fontSize: 16, padding: 4, width: 50 }}>
                    </input>
                    <label>TT</label>
                </div>
                <div className='box'>
                    <label className='label_colon'>:</label>
                </div>
                <div className='box'>
                    <input id="txtEndMM"
                        type="text"
                        name="guest_endMM" required
                        style={{ fontSize: 16, padding: 4, width: 50 }}>
                    </input>
                    <label>MM</label>
                </div>
            </div>
            <div> 
                <label for="txtguestnum" className="label_block">Ruokailijoiden määrä </label>
                <input 
                    id="txtguestnum"
                    type="number"
                    min={1} max={100} 
                    name="guest_num" required
                    style={{ fontSize: 16, padding: 4, width: 550, marginBottom:"20px" }}>
                </input>
            </div>
            <div>
                <label for="txtmessage" className="label_block">Erikoispyynnöt tai lisätiedot</label>
                <textarea 
                    id="txtmessage"
                    name="message" 
                    style={{ fontSize: 16, padding: 4, width: 550, height: 300 }}>
                </textarea>
                <div>
                    <button type="submit" className="btn">LAHETA VARAUS</button>
                </div>
            </div>
           
    </form>
        
        </>
    )
}

