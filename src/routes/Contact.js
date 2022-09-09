import { FaMapMarkerAlt, FaFacebook, FaPhone, FaEnvelope, FaInstagram, FaTripadvisor} from "react-icons/fa";

const Contact = () => {
    const tampereaddr = "https://www.google.fi/maps/place/Itsen%C3%A4isyydenkatu+15,+33100+Tampere/@61.499157,23.7792193,17z/data=!3m1!4b1!4m5!3m4!1s0x468edf55ba4a4dfd:0x34c0b43f7d307d94!8m2!3d61.499157!4d23.781408?authuser=1"
    const helsinkiaddr = "https://www.google.fi/maps/place/It%C3%A4lahdenkatu+20,+00210+Helsinki/@60.1520894,24.8778116,17z/data=!3m1!4b1!4m5!3m4!1s0x46920a5ed514ce53:0x74441f1e75b07afc!8m2!3d60.1520894!4d24.8800003?authuser=1"


    return (
        <div className="split">
            <div>
                <h1>Tampere</h1>
                <p><FaPhone />{'  '} <a className="home-nav-links" href="tel:PHONE_NUM"> 045 340 1722 </a></p>
                <p><FaEnvelope />{'  '} <a className="home-nav-links" href="mailto:ravintolaborneo@gmail.com" target="_blank" rel="noopener noreferrer">ravintolaborneo@gmail.com</a></p>
                <p>{' '}</p> 
                <p>Itsenäisyydenkatu 15</p>
                <p>33100 Tampere</p> 
                <h3>Aukioloajat</h3>
                <p>Ma-Pe klo 11–21</p>
                <p>La klo klo 11–21</p>
                <p>Sunnuntait ja pyhäpäivät suljettu</p>
            </div>
            <div>
                <h1>Helsinki</h1>
                <p><FaPhone />{'  '} <a className="home-nav-links" href="tel:PHONE_NUM"> 045 600 6354 </a></p>
                <p><FaEnvelope />{'  '} <a className="home-nav-links" href="mailto:ravintolaborneo@gmail.com" target="_blank" rel="noopener noreferrer">ravintolaborneo@gmail.com</a></p>
                <p>{' '}</p>
                <p>Itälahdenkatu 20</p>
                <p>00210 Helsinki</p>
                <h3>Aukioloajat</h3>
                <p>Ma-Pe 10:30–14:30</p>
                <p>Viikonloput ja pyhäpäivät suljettu</p>
            </div>
        </div>
    
    );

};

export default Contact;