import React, { useRef} from "react";
import emailjs from '@emailjs/browser';
import logocolor from "../images/logo-color.png";
import { FaMapMarkerAlt, FaFacebook, FaPhone, FaEnvelope, FaInstagram, FaTripadvisor} from "react-icons/fa";
import { ContactUs } from "./ContactUs";

function Footer() {

    const tampereaddr = "https://www.google.fi/maps/place/Itsen%C3%A4isyydenkatu+15,+33100+Tampere/@61.499157,23.7792193,17z/data=!3m1!4b1!4m5!3m4!1s0x468edf55ba4a4dfd:0x34c0b43f7d307d94!8m2!3d61.499157!4d23.781408?authuser=1"
    const helsinkiaddr = "https://www.google.fi/maps/place/It%C3%A4lahdenkatu+20,+00210+Helsinki/@60.1520894,24.8778116,17z/data=!3m1!4b1!4m5!3m4!1s0x46920a5ed514ce53:0x74441f1e75b07afc!8m2!3d60.1520894!4d24.8800003?authuser=1"
    

    return(
        <div className="container">
            <div className="split">
            <div>
                    <img className="image" src={logocolor} alt="logocolor" width="180" height="100"/>
                    <h4>Ravintola Borneo, Tampere</h4>
                    <p />
                    <FaMapMarkerAlt />{'  '} <a className="home-nav-links" href={tampereaddr}>Itsenäisyydenkatu 15, 33100 Tampere</a> 
                    <p><FaPhone />{'  '} <a className="home-nav-links" href="tel:PHONE_NUM"> 045 340 1722 </a></p>
                    <FaEnvelope />{'  '} <a className="home-nav-links" href="mailto:ravintolaborneo@gmail.com" target="_blank" rel="noopener noreferrer">ravintolaborneo@gmail.com</a>
                    <br />
                    <br />
                    <h4>Ravintola Borneo, Helsinki</h4>
                    <p />
                    <FaMapMarkerAlt />{'  '} <a className="home-nav-links" href={helsinkiaddr}>Itälahdenkatu 20, Helsinki</a> 
                    <p><FaPhone />{'  '} <a className="home-nav-links" href="tel:PHONE_NUM">045 600 6354</a></p>
                    <FaEnvelope />{'  '} <a className="home-nav-links" href="mailto:ravintolaborneo@gmail.com" target="_blank" rel="noopener noreferrer">ravintolaborneo@gmail.com</a>
                    <br />
                    <br />
                    <div>
                        <a href="https://www.facebook.com/borneofinland/"><FaFacebook size={30}/></a>
                        {'        '}
                        <a href="https://www.instagram.com/ravintolaborneo/"><FaInstagram size={30}/></a>
                        {'        '}
                        <a href="https://www.tripadvisor.com.my/Restaurant_Review-g189934-d7211438-Reviews-Ravintola_Borneo-Helsinki_Uusimaa.html"><FaTripadvisor size={30}/></a>
                        </div>
                    
                </div>    
            <ContactUs />

            </div>  
        </div>

    );


}

export default Footer;