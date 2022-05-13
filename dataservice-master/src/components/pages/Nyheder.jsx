import {useState, useEffect} from "react";
import {PuffLoader} from "react-spinners"
// hent data via apikalds-filen (helper)

import {hentNyheder} from '../helpers/newsapikald'
import Nyhed from "../Nyhed";

const Nyheder = (props) => {

    const antal = props.antal ? props.antal : 30;
    // STATE

    const [news, setNews] = useState()          //til at rumme data fra API'et
    const [loading, setLoading] = useState(false)   // true når vi venter på data fra API'et
    const [fejl, setFejl] = useState(false)         // true når vi får fejl

    // opkal til api'er når componet er loadet

    const [soegeord, setSoegeord] = useState("clima")

    const [sprog, setSprog] = useState("en")


    useEffect(() => {

        setLoading(true);
    
        //forsinker data så loader vises i x antal sekunder 
        setTimeout(() => {
            
            
            // Kald apiet = og gem data i state + håndter load og fejl
    
            hentNyheder(soegeord, sprog).then( data => { 
                
                if (data) {
                    console.log(data);
                    setNews(data); // put data fra api'et i state
                setFejl(false)   // nulstil en evt. tidligere fejl
                
            } else {
                setNews()      //nulstil/tøm evt. tidl. data
                setFejl(true)
            }
            
        }
        
        ).finally(
            setLoading(false)
            
            )
        }, 3000);
            
    }, [soegeord, sprog])

    return (
        <div className="App">
      <h1> Nyheder - ex 1</h1>
      <input type="text" defaultValue={soegeord} onInput={(e) => setSoegeord(e.target.value)} placeholder="so" />

        <br />
        <br />
    <select onChange={ (e) => setSprog(e.target.value) }>
        <option value="">ALT</option>
        <option value="ar">ar</option>
        <option value="de">de</option>
        <option value="en">en</option>
        <option value="es">es</option>
        <option value="fr">fr</option>
        <option value="he">he</option>
        <option value="it">it</option>
        <option value="nl">nl</option>
        <option value="no">no</option>
        <option value="pt">pt</option>
        <option value="ru">ru</option>
        <option value="se">se</option>
        <option value="ud">ud</option>
        <option value="zh">zh</option>
    </select>


    {/* Hvis der er people-data .... */}
    {
        news && <div>


        {
            news.articles.slice(0, antal).map(n => (
             <Nyhed nyhed= {n} key={n.url}/>
               

            ))
        }

        </div>
    }

    {/*  Hvis vi venter på data = LOading */}

    { 
        loading && <div>  
            <h1>der loades data fra API'et .... vent venligst</h1>
            <PuffLoader size={150} color={"#FF0000"}/>
             </div>
    }
        {/* Opstået fejl - svar fra API'et er null */}

        {
            fejl && <h1>der er opstået en fejl</h1>
        }
    


    </div>
    )
}

export default Nyheder
