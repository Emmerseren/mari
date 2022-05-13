import { useState } from "react" 

const Nyhed = (props) => {

    const n = props.nyhed

    /* skal det vises eller ikke vises  */
    const [show, setShow] = useState(false)
    return (
        <div >
              <h2 onClick={ () => setShow(!show)}  className="point">{n.title}</h2>
                <img src={n.urlToImage} alt= {n.title} width="200"/> 
              <ul className={show ? "show" : "hide"}>
                <li> {n.author}</li>
                <li> {n.content}</li>
                <a href={n.url}> link</a>
              </ul>
            </div>
       
    )
}

export default Nyhed
