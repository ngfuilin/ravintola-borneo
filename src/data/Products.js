const Products = [
    {
        category: 'paaruuat',
        cName: '1. Borneolainen lajitelma', 
        remark: 'Tähän lajitelmaan on valikoitu erityisiä malesialaisia juhlaruokia. Ruokalajeista kuvastuvat Malesian pitkä historiaa maustekaupan keskuksena Aasiassa ja niissä kuvastuu malesialaisen keittiön laaja makujen kirjo. Lajitelma sisältää. Jasmiini- ja keltaista riisiä, Keropok (katkarapulastut), Satay Ayam (satay - kanaa vartaassa), Roti Canai (intialaistyylinen leipä), Kari Ayam (malesialainen currykana), Rendang (haudutettua naudanliha pataa), Sambal Tumis Udang (chili katkarapua). Laktoositon / Maidoton / Sisältää meren eläviä',
        price: '38,9€', 
        uom:'hkl',
        note: 'Vähintään 2 hengelle',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/Borneo-Platter-1-100x100.jpg'
    },
    {  
        category: 'paaruuat',
        cName: '2. Satay Ayam Roti Canai', 
        remark: 'Malesialainen leipä jonka päälle laitetaan maustettuja kanakuutioita ja satay kastikketta. Leipä kääritään rullalle ja syödään käsin. Tarjoillaan 2:n Roti Canain kanssa. Pähkinälle allergisille voimme vaihtaa pähkinän currykastikkeeseen. Laktoositon / Maidoton / Sisältää maapähkinää',
        price: '22,9€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/2.-Satay-Ayam-Roti-Canai-100x100.jpg'
    },
    {  
        category: 'paaruuat',
        cName: '2b. Satay Ayam Nasi Kelapa', 
        remark: 'Satay-kanaa vartaassa pähkinäkastikkeen kanssa. Tarjoillaan kookoksella maustetun riisin kera. (L,VG &M)',
        price: '18,9€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/2b.-Satay-Ayam-Nasi-Kelapa-100x100.jpg'
    },
   
    {
        category: 'riisiruuat',
        cName: '3. Nasi Lemak', 
        remark: 'Nasi Lemak -annos pohjautuu riisiin, joka on keitetty Pandan lehtien kanssa kookosmaidossa. Tämä annos on lähes kansallisruuan asemassa Malesiassa. Tarjoilemme perinteisesti Nasi Lemakin kanalla lisukkeiden kera. *voi tilata ilman maapähkinää ja kananmuna. Laktoositon / Maidoton / Vähägluteeninen / Sisältää meren eläviä / kananmunaa / maapähkinää',
        price: '18,9€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/4.-Nasi-Lemak-100x100.jpg'
    },
    {
        category: 'nuudeliannos',
        cName: '4. Kari Laksa', 
        remark: 'Kari Laksa -annos pohjautuu riisiin, joka on keitetty Pandan lehtien kanssa kookosmaidossa. Tämä annos on lähes kansallisruuan asemassa Malesiassa. Tarjoilemme perinteisesti Nasi Lemakin kanalla lisukkeiden kera. *voi tilata ilman maapähkinää ja kananmuna. Laktoositon / Maidoton / Vähägluteeninen / Sisältää meren eläviä / kananmunaa / maapähkinää',
        price: '17,9€', 
        uom:'',
        note: 'Vähintään 2 hengelle',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/12.-Kari-Laksa-100x100.jpg'
    }, 
    {
        category: 'nuudeliannos',
        cName: '5. Mee Goreng Mamak Pedas', 
        remark: 'Paistettu vehnänuudeliruoka kanalla ja katkaravuilla. Tähän ruokalajiin törmää Malesiassa erityisesti hawker -kojuilla ja se on lähtöisin Malesian intialaisväestön keskuudesta. Annoksessa korostuu tomaattikastikkeen maku, joka on tyypillinen intialaisruokien aines Malesiassa. Laktoositon / Maidoton / Sisältää meren eläviä / Sisältää kananmunaa',
        price: '17,9€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/Mee-Goreng-Mamak-Pedas-1-100x100.jpg'
    },
    ,
    {
        category: 'nuudeliannos',
        cName: '6. Kueh Teow Goreng', 
        remark: 'Kari Paistettuja riisi-nuudeleita kanan ja katkarapujen kanssa. Hokkien-kiinalaisten kehittämä ruokalaji, joka on erityisen suosittu Singaporessa. Laktoositon / Maidoton / Vähägluteeninen / Sisältää meren eläviä / Sisältää kananmunaa',
        price: '17,9€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/Kueh-Teow-Goreng-1-100x100.jpg'
    }, 
    {
        category: 'kasvisruokia',
        cName: '7. Borneolainen Kasvislajitelma', 
        remark: 'Malesian pitkä historiaa maustekaupan keskuksena Aasiassa ja niissä kuvastuu malesialaisen keittiön laaja makujen kirjo. Lajitelma sisältää. Jasmiini- ja keltaista riisiä, Popiah Goreng (kevätkääryle), Roti Canai (intialaistyylinen leipä), Sayur Goreng (sekavihanneksia), Kari Sayur (sekavihanneksia currykastikkeessa), Chilitofu (friteerattu tofu). Laktoositon / Maidoton / Vähägluteeninen',
        price: '29,9€', 
        uom:'',
        note: 'Vähintään 2 hengelle',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/15.-Borneo-Vegetable-Platter-100x100.jpg'
    },
    {
        category: 'kasvisruuat',
        cName: '8. Nasi Campur Sayur', 
        remark: 'Nasi campur eli ’riisisekoitus’ on riisiä, jossa on talon currytofua sekä tofua Satay -kastikkeen kanssa. Laktoositon / Maidoton / Vähägluteeninen / Sisältää maapähkinää',
        price: '19,9€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/16.-Nasi-Campur-Sayur-100x100.jpg'
    },
   {
        category: 'kasvisruuat',
        cName: '9. Nasi Goreng Nanas', 
        remark: 'Paistettua riisiä sipulin, paprikan, tuoreen ananaksen ja kananmunan kanssa. Laktoositon / Gluteeniton / Maidoton / Sisältää kananmunaa',
        price: '17,9€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/18.-Nasi-Goreng-Nanas-100x100.jpg'
    },
    {
        category: 'nuudeliruuat',
        cName: '10. Borneo Mee Goreng', 
        remark: 'Paistettuja kananmuna-nuudeleita kasvisten kansssa. Tämä ruokalaji on omistajasuvun oma vanha resepti (L,M)',
        price: '16,9€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/23.-Borneo-Mee-Goreng-100x100.jpg'
    },
    {
        category: 'lisukkeet',
        cName: 'L1. Roti Canai', 
        remark: 'Roti canai on erittäin suosittu pannuleipä Malesiassa asuvien intialaisten keskuudessa. Roti canai on pinnalta rapea ja sisältä pehmeä. (*Sisältää vehnää ja gheetä eli kirkastettua voita.) Laktoositon / Maidoton',
        price: '3,9€', 
        uom:'pc',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/L3.-Roti-Canai-100x100.jpg'
    },
    {
        category: 'lisukkeet',
        cName: 'L2. Satay Ayam', 
        remark: 'Paistettuja kananmuna-nuudeleita kasvisten kansssa. Tämä ruokalaji on omistajasuvun oma vanha resepti (L,M)',
        price: '7,9€', 
        uom:'2 pcs',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/Satay-Ayam-100x100.jpg'
    },
    {
        category: 'jalkiruoat',
        cName: 'Kelapa', 
        remark: 'Kookosjäätelöä, joka tarjoillaan paahdettujen kookoshiutaleiden ja pekaani pähkinöiden kanssa. Gluteeniton',
        price: '8€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/Kelapa-100x100.jpg'
        
    },
    {
        category: 'jalkiruoat',
        cName: 'Pisang', 
        remark: 'Vaniljajäätelöä, joka tarjoillaan grillatun tuoreen banaanin ja popcornin kanssa. Laktoositon / Gluteeniton',
        price: '8€', 
        uom:'',
        note: '',
        picture: 'https://www.ravintolaborneo.fi/wp-content/uploads/2020/06/Pisang-100x100.jpg'
    },
    {
        category: 'valkoviinit',
        cName: 'Bordeaux Vircoulon', 
        remark: '24cl 11,30 €, 16cl 8,20 €, 12cl 6,00 €',
        price: '35€', 
        uom:'pullo',
        note: ' ',
        picture: ''
    },
    {
        category: 'valkoviinit',
        cName: 'Gros Plant sur Lie', 
        remark: '24cl 12,60 €, 16cl 8,4 €, 12cl 6,3 €',
        price: '39€', 
        uom:'pullo',
        note: '',
        picture: ''
    }

]

export default Products;