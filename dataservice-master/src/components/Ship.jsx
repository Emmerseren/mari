import { useState } from "react" 

const Ship = (props) => {

    const s = props.ship

    /* skal det vises eller ikke vises  */
    const [show, setShow] = useState(false)


    return (
        <div >
                  <h2 onClick={ () => setShow(!show)}  className="point">{s.name}</h2>
              <ul className={show ? "show" : "hide"}>
                 <li>Model: {s.model}</li>
                <li>Length: {s.length} m</li>
                <li>Passengers: {s.passengers}</li>
              </ul>
        </div>
    )
}

export default Ship
