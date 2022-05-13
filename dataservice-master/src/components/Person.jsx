import { useState } from "react" 

const Person = (props) => {

    const p = props.person

    /* skal det vises eller ikke vises  */
    const [show, setShow] = useState(false)
    
    return (
      <div  >
              <h2 onClick={ () => setShow(!show)}  className="point">{p.name}</h2>
              <ul className={show ? "show" : "hide"}>
                <li>Hårfarve: {p.hair_color}</li>
                <li>højde: {p.height}</li>
                <li>vægt: {p.mass}</li>
              </ul>
            </div>
    )
}

export default Person
