import React from "react";
import './Presentation.css'
import { useNavigate }    from "react-router-dom"
import {assignment} from "../../data/assignment"
import img from "../../assets/img_know_us.png"

const Presentation = () => {
    
    const navigate = useNavigate();

    const onClick = ()=>{
        navigate('/philosophy');
    }
    const onClick2 = () =>{
        navigate('/assignment')
    }
    return(
        <div className="Presentation_section">
            <div className="ps_philosophy">
                <div className="ps_phil_img">
                <img src={img}/>
                </div>
                <div className="ps_phil_title">
                    <p className="ps_title">¡Descubre quiénes somos!</p>
                </div>
                <div className="ps_phil_text">
                    <p className="ps_text">Descubre quiénes somos y cómo estamos innovando con tecnología. Conoce al 
                        equipo detrás de cada uno de nuestros trabajos y nuestra pasión por la 
                        tecnología y la enseñanza.</p>
                </div>
                <div className="ps_phil_btn">
                    <button className="btn_green" onClick={onClick}>¡Conocenos!</button>
                </div>
            </div>
            <div className="ps_jobs">
                <div className="ps_jobs_title">
                    <p className="ps_title">¡Explora nuestros trabajos!</p>
                </div>
                <div className="ps_jobs_text">
                    <p className="ps_text">Explora nuestra sección de trabajos y no te pierdas la oportunidad 
                        de inspirarte y colaborar con las brillantes mentes del mañana. ¡Explora, inspírate y 
                        únete a nosotros!</p>
                </div>
                <div className="ps_jobs_images">
                    <div class="image-container1">
                        <div class="image-strip" id="imageStrip">
                        {assignment.map((data)=>(
                            <img src={data.url_img}/>
                        ))}
                        </div>
                    </div>
                    <div class="image-container2">
                        <div class="image-strip" id="imageStrip">
                        {assignment.map((data)=>(
                            <img src={data.url_img}/>
                        ))}
                        </div>
                    </div>
                    <div className="ps_jobs_title_small">
                        <p className="ps_title_small">¡Déjate inspirar por la creatividad y la innovación!</p>
                    </div>
                    <div className="ps_jobs_btn">
                        <button className="btn_black" onClick={onClick2}>Ver más</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Presentation