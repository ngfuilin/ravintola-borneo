import { Reservation } from "../components/Reservation";

const Cabinet = () => {
    return (
        <div className="content1">
            <div className="box">
                
                <p>Asiakastapaaminen lounaan merkeissä? Illallinen läheisten kesken? Aihetta juhlaan?</p>

                <p>Oli erityinen tilaisuutesi mikä tahansa, meillä pääset nauttimaan uniikeista ja herkullisista mauista omassa rauhassa, 
                    tyylikkäässä kabinetissamme! </p>

                <p>Tampereen ravintolamme kabinetti on kaunis, intiimi tila, jonka pitkän pöydän ääreen mahtuu 12 ruokailijaa. 
                    Kabinetti antaa yksityisyyttä virallisiin tapaamisiin sekä luo ihanan, lämpimän tunnelman juhlahetkiin. </p>

                <p>Laajalta ruokalistaltamme jokainen vieras löytää varmasti mieleisensä vaihtoehdon. 
                    Tarjoamme autenttisia malesialaisia makuja aina tuoreista ja laadukkaista raaka-aineista – ruoka-annoksemme eivät 
                    kalpene hienoimmankaan tilaisuuden äärellä. Huomioimme myös erityisruokavaliot.</p>

                <p>Ota yhteyttä, niin suunnittelemme yhdessä kanssasi täydellisen asiakastapaamisen tai juhlahetken! </p>

                <p>Vip-huoneen voi varata 8 – 16 hengelle. Lounasaikaan 11:00-14:00 ensimmäinen tunti on ilmainen, tämän jälkeen 50 e/tunti. 
                    Iltapäivällä ensimmäiset 2 tuntia ovat ilmaisia, ja sen jälkeen 50 e/tunti.</p>
            </div>
            <h3>Tilaa annokset helposti netissä ja nappaa nopeasti mukaan kotimatkallasi!</h3>
            <button className="btn" type="button">OTA YHTEYTTA</button>
            <h3>Voit tehdä kabinetin varauspyynnön helposti myös alla olevalla lomakkeella:</h3>    
            <Reservation />
        </div>
    );
};

export default Cabinet;