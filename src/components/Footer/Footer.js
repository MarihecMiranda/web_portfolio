import React from "react";
import { BsTelephone, BsInstagram, BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import './Footer.css'

const Footer = ({active}) =>{
    return(
        <div className="Footer">
            <div className="footer_logo">
                <div class="horizontal-line"></div>
                <a href="/">Portafolio</a>
                <div class="horizontal-line"></div>
            </div>
            <div className="items">
                <a href="/" className={`item_footer ${
                            active == 1 ? "green" : " "
                        }`}> Inicio </a>  
                <a href="/philosophy" className={`item_footer ${
                            active == 2 ? "green" : " "
                        }`}> Nosotros </a>   
                <a href="/assignment" className={`item_footer ${
                            active == 3 ? "green" : " "
                        }`}> Trabajos </a> 
                <a href="/contact" className={`item_footer ${
                            active == 4 ? "green" : " "
                        }`}> Contactanos </a> 
            </div>
            <div className="contact">
                <a href="/" className="green"> Contactanos </a>  
                <a href="/nosotros"> Facebook </a>   
                <a href="/paquetes"> Instagram </a> 
                <a href="/hospedaje"> WhatsApp </a>  
            </div>
            <div className="socials">
                <a href="socials" className="green"> Social </a> 
                <div className="icon--socialMedia">
                    <a 
                        key={`facebook`}
                        className="facebook" 
                        href='https://facebook.com/'
                        target="_blank" 
                        rel="noopener noreferrer">
                        <BsFacebook className="facebook" />
                    </a>
                    <a 
                        key={`instagram`}
                        className="instagram"
                        href='https://facebook.com/'
                        target="_blank" 
                        rel="noopener noreferrer">
                        <BsInstagram className="facebook" />
                    </a>
                    <a 
                        key={`linkedin`}
                        className="linkedin"
                        href='https://facebook.com/'
                        target="_blank" 
                        rel="noopener noreferrer">
                        <FaLinkedinIn className="facebook" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer