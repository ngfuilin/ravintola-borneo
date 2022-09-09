import React, {useState} from "react";
import osiokuva from "../images/osiokuva.jpg";
import osio2 from "../images/osio-2.jpg";
import background from "../images/kuvituskuva.jpg";
import lounas from "../images/lounas.jpg";
import ruokalista from "../images/ruokalista.jpg";
import varaapoyta from "../images/varaa-poyta.jpg";
import Lunch from "../routes/Lunch";
import {Link} from 'react-router-dom';


function Home () {

    const [click, setClick] = useState (false)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleClick = () => {
        <Lunch />
    }

      
        return (
           
            <div>
                <section className="bg-dark">  
                    <div className="container">
                                          
                        <div className="split">
                            <div>
                                <p>Perustimme ravintola Borneon äitini kanssa vuonna 2010. Siitä 
                                lähtien olemme sitoutuneet luomaan unohtumattoman 
                                makuelämyksen jokaisessa annoksessa, joka keittiöstämme 
                                lähtee. Inspiraationamme on Malesian monet kasvot -
                                usvaisista sademetsistä vuoren rinteitä kiertäviin 
                                teeplantaaseihin, aina pitkään historiaan Kaukoidän 
                                maustekaupan solmukohtana.</p>
                                <br />
                                <p>Haluamme tarjota Suomen parasta, autenttista maleasialaista 
                                kotiruokaa. Kaikki reseptimme ovat peräisin äidiltäni ja hänen
                                suvultaan – niin kotikeittiöistä kuin perheen omasta ravintolasta     
                                Maleasiassa.</p>
                            </div>
                            <div>
                                <img  src={osiokuva} alt="osiokuva" width="600" height="350"/>    
                            </div>
                        </div>
                    </div>
                </section>
                             
                <section className="bg-plain">  
                    <div className="container">
                        <div className="split">               
                            <div>
                                <img  src={osio2} alt="osio2" width="600" height="350"/>  
                            </div>
                            <div>
                                <p>Eksoottisten tuoksujen ympäröimänä voit kokea kuin olisit  
                                matkustanut tuhansien kilometrien päähän kaukaiseen 
                                pieneen kylään osallistuaksesi perheen yhteiseen
                                ruokahetkeen. Juuri sitä jokainen asiakkaamme meille on –
                                perhettä. Haluamme, että saapuessasi ravintolaamme sinusta 
                                tuntuu, kuin saapuisit vierailulle rakkaan ystäväsi kotiin.</p>
                                <p />
                                <p>Keittiömme höyryävistä kattiloista ja sihisevistä pannuista
                                lähtien, aina pöytääsi kannetulle lautaselle saakka, pyrimme
                                varmistamaan jokaisessa vaiheessa ruoan laadun ja tuoreuden. 
                                Tavoitteemme on, että ravintolastamme poistutaan aina 
                                kylläisenä ja hymy huulilla.</p>
                            </div>   
                        </div>
                    </div>
                </section>  

            
                <div style={{
                    backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '400px',
                        position: 'relative',
                        marginBottom: '20px',
                    }}>
                    <div class="hero-text">
                    <h1 style={{fontSize:'25px'}}>Lämpimästi tervetuloa uniikille makumatkalle ravintolaamme!</h1>
                    <p>Terveisin Eugienna, Yrittaja</p>
                    </div>
                </div>
            
                <section className='bg-plain'>
                    <div className="container">
                        <div className="split">  
                            <div className="box">
                                <Link to="/Lunch">
                                    <img  src={lounas} alt="Lounas" width="600" height="200" textAlign="center"/>  
                                </Link>
                                
                                 <div className="text">Lounas</div>  
                            </div>
                            <div className="box">
                                <Link to="/Menu">
                                    <img src={ruokalista} alt="Ruokalista" width="600" height="200" textAlign="center"/> 
                                </Link> 
                                 <div className="text">Ruokalista</div>  
                            </div>
                            <div className="box">
                                <Link to="/Reserve">
                                    <img  src={varaapoyta} alt="varaa poyta" width="600" height="200" />  
                                </Link>
                                <div className="text">Vaara Poyta</div>  
                            </div>
                        </div>
                    </div>

                </section>
                                        
                
        </div>
                 
        );
}

export default Home;