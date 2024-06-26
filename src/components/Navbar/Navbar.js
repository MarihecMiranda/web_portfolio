import React, {useState} from "react";
import "./Navbar.css"

const Navbar = () => {
    const [ isOpen, setIsOpen] = useState(false)

    return (
        <div className="Navbar">
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="/"> Inicio </a>  
                <a href="/philosophy"> Nosotros </a>   
                <a href="/assignment"> Trabajos </a> 
                <a href="/contact"> Contactanos </a> 
            </div>

            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () =>
                setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar