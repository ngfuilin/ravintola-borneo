import brunch1 from "../images/brunch1.jpg";
import brunch2 from "../images/brunch2.jpg";
import brunch3 from "../images/brunch3.jpg";
import brunch4 from "../images/brunch4.jpg";
import brunch5 from "../images/brunch5.jpg";
import brunch6 from "../images/brunch6.jpg";
import brunch7 from "../images/brunch7.jpg";
import brunch8 from "../images/brunch8.jpg";


const Brunch = () => {
    return (
        <>
            <div className="container">
                <img  src={brunch1} alt="brunch1" width="600" height="350" />   
            </div>
            <div className="split">
                <div className="box">
                    <img src={brunch2} alt="brunch2" width="800" height="450"/>   
                </div>
                <div className="box">
                    <img src={brunch3} alt="brunch3" width="800" height="450"/>   
                </div>
                <div className="box">
                    <img src={brunch4} alt="brunch4" width="800" height="450"/>    
                </div>
            </div>
           
           
            <div className="split">
                <div className="box">
                    <img  src={brunch5} alt="brunch5" width="800" height="450"/>   
                </div>
                <div className="box">
                    <img  src={brunch6} alt="brunch6" width="800" height="450"/>   
                </div>
                <div className="box">
                    <img  src={brunch7} alt="brunch7" width="800" height="450"/>  
                </div> 
            </div>
            <div className="split">
                <img  src={brunch8} alt="brunch8" width="600" height="500"/>   
            </div>
            <section className="bg-plain">  
                <div className="box">
                <div className="content1">
                        
                        <p>Start your weekend enjoying a warm atmosphere, authentic Malaysian flavors 
                            and a rich table of delicacies at our Saturday brunch! Brunch combines breakfast 
                            and lunch into one hearty meal, which will help you start your weekend energized and full.
                        </p>
                        <p>
                            All our food is made from fresh and high-quality ingredients, following our family's own recipes. 
                            There is sure to be something for everyone at our squishy brunch table - 
                            from fresh salads to unique warm dishes and mouth-watering desserts! 
                            We have tried to take special diets into account as much as possible, but if you wish, 
                            you can ensure a brunch suitable for your diet by contacting us.
                        </p>
                        <h1>Brunch every Saturday from 11 am to 4 pm </h1>
                        <h3>Brunch menu</h3>
                        <p>A rich, Asian-inspired salad table</p>
                        <p>Beverage options include flavored drinks, water and juice created from the berries and herbs themselves</p>
                        <p>A versatile, weekly changing selection of hot dishes</p>
                        <p>Always available hot dishes:</p>
                        <ul>
                            <li>Deep-fried wonton dumplings</li>
                            <li>Chicken satay skewers</li>
                            <li>Fried noodles a la Mamak</li>
                            <li>Tumeric flavored rice</li>
                            <li>Malaysian roti bread</li>
                        </ul>
                        <p>Warm dishes change, each brunch offers protein options and vegetables:</p>
                        <ul>
                            <li>Sticky Ribs from Borneo</li>
                            <li>Beef Rendang</li>
                            <li>Tofu in curry sauce</li>
                            <li>Fried vegetables with garlic</li>
                        </ul>
                        <p>A delicious dessert table</p>
                        <ul>
                            <li>Panna cotta</li>
                            <li>Borneo's classic brownie</li>
                            <li>Banana cake</li>
                            <li>Cookies and candy</li>
                        </ul>
                    
                    <p>Coffee Tea</p>  
                    <h1>The price of brunch is €29.90</h1>
                    <p>Children under 12 €1/year of age.</p>
                    </div>
                    </div>
                  
                </section>   
        </>
    )
   
};

export default Brunch;