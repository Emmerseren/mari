import {useState, useEffect} from "react";
import {PuffLoader} from "react-spinners"
// hent data via apikalds-filen (helper)

import {hentStarships} from '../helpers/swapikald'
import Ship from "../Ship";




function Starships(props) {

    
    const antal = props.antal ? props.antal : 30;
    // STATE

    const [starships, setStarships] = useState()          //til at rumme data fra API'et
    const [loading, setLoading] = useState(false)   // true når vi venter på data fra API'et
    const [fejl, setFejl] = useState(false)         // true når vi får fejl

    
    // opkal til api'er når componet er loadet
useEffect(() => {

    setLoading(true);

    //forsinker data så loader vises i x antal sekunder 
    setTimeout(() => {
        
        
        // Kald apiet = og gem data i state + håndter load og fejl

        hentStarships().then( data => { 
            
            if (data) {
                console.log(data);
                setStarships(data); // put data fra api'et i state
            setFejl(false)   // nulstil en evt. tidligere fejl
            
        } else {
            setStarships()      //nulstil/tøm evt. tidl. data
            setFejl(true)
        }
        
    }
    
    ).finally(
        setLoading(false)
        
        )
    }, 3000);
        
}, [])

    return (
        <div className="App">
      <h1> Star wars - ex 2</h1>

    {/* Hvis der er starships-data .... */}
    {
       starships && <div>


        {
            starships.results.slice(0, antal).map( s => (
                <Ship ship={s} key={s.name} />
              
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

export default Starships
