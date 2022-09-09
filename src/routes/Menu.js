import React, {useRef, useEffect} from "react";
import Category from "../data/Category";
import Products from "../data/Products";
import osiokuva from "../images/osiokuva.jpg";

function Menu () {

    const notes = "";
    const refSection = useRef(null);
    const dot = ".";
    const strLenght = 70;
    const lenDescr = 0;
  
    const refs = Category.reduce((acc, value) => {
        acc[value.id] = React.createRef();
        return acc;
    })

    const handleClick = (id) => {
         refs[id].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };

    
    const displaySeperator = (param) => {

        return (
            dot.repeat(strLenght - param.length)
        );
    }

    const ProductRow = Category.map((post, i) =>
            <section>
                <div className="menu-list">
                    <div className="split">
                        <h2 
                            ref={refs[post.id]}
                            style={{height: '25px'}}>{post.cName}</h2>  
                    </div>
                   
                    <ul className="ul">
                        {Products.filter(param => param.category === post.id).map((element, index) =>
                        <li key={index}>
                            <div className="box1">
                                <div className="image">
                                    <img src={element.picture} alt="image" width="100" height="100" />
                                </div>
                               
                                <div className="text">
                                        <span style={{fontWeight:"bold"}}>{element.cName}</span>
                                        <span>{dot.repeat(strLenght)}</span>
                                        <span style={{fontWeight:"bold"}}>{element.price}</span>
                                        {element.uom.length > 0 && <span>/</span>}
                                        <span style={{fontWeight:"bold"}}>{element.uom}</span>
                                        <p><span>{element.remark}</span></p>
                                        {element.note.length > 0 && 
                                            <span className="menu-list__special">
                                                {element.note}</span>
                                            }
                                </div>
                            </div>
                        </li>
                        )}               
                    </ul>
                
                </div>
                
            </section>
        );
    
        return (
            <>
            <section>
                <div className="container">
                    <p>Uniikkeja ja autenttisia aasialaisia makuja, tuoreista ja laadukkaista raaka-aineista. Niistä on ravintola Borneon ruokalista tehty.
                    </p>
                    <br />
                    <p>Kaikki reseptit ovat sukumme omia reseptejä Malesiasta. Rikkaan mausteiset maut vievät sinut pieneen malesialaiseen kylään, perheillallisen äärelle – lämmin, kodikas ja aito malesialainen tunnelma on käsin kosketeltavissa.
                    </p>
                    <br />    
                    <h2>Tutustu ruokalistaamme ja varaa pöytä makumatkalle!</h2>
                </div>
            </section>        
            
            <section>
                <div className="menu-list">
                    {<ul className="ul">
                        {Category.map((item, index) => {
                            return (
                                <li className="li" 
                                    key={item.id}
                                    onClick={() => handleClick(item.id)}
                                    >
                                     {item.cName}
                                    
                                </li>
                            )
                        })}                     
                    </ul>  
                    }
                </div>           
            </section>
            {ProductRow}
                   
            </>

        );


}

export default Menu;