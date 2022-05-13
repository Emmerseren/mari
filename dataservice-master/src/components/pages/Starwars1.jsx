import {useState, useEffect} from "react";
import {PuffLoader} from "react-spinners"
// hent data via apikalds-filen (helper)

import {hentPeople} from '../helpers/swapikald'
import Person from "../Person";


const Starwars1 = (props) => {

    const antal = props.antal ? props.antal : 30;
    // STATE

    const [people, setPeople] = useState()          //til at rumme data fra API'et
    const [loading, setLoading] = useState(false)   // true når vi venter på data fra API'et
    const [fejl, setFejl] = useState(false)         // true når vi får fejl

    // opkal til api'er når componet er loadet
useEffect(() => {

    setLoading(true);

    //forsinker data så loader vises i x antal sekunder 
    setTimeout(() => {
        
        
        // Kald apiet = og gem data i state + håndter load og fejl

        hentPeople().then( data => { 
            
            if (data) {
                console.log(data);
                setPeople(data); // put data fra api'et i state
            setFejl(false)   // nulstil en evt. tidligere fejl
            
        } else {
            setPeople()      //nulstil/tøm evt. tidl. data
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
      <h1 className="header_star"> Star wars - ex 1</h1>

    {/* Hvis der er people-data .... */}
    {
        people && <div>


        {
            people.results.slice(0, antal).map(p => (
                <Person person={p} key={p.name}/>
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
  );
};

export default Starwars1;
