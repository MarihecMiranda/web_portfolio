import React from "react";
import know_us from "../../assets/about_us/know_us.jpg"
import "./About_us.css"

const About_us = () => {
    return(
        <div>
            <div className="phil_know_us">
                <div className="phil_img_ku">
                    <img src={know_us} />
                </div>
                <div className="phil_title_ku">
                    <p className="phil_title">¡Conocenos!</p>
                </div>
                <div className="phil_text_ku">
                    <p className="phil_text">Somos un grupo de estudiantes unidos y comprometidos, formando parte de la Misión Sucre, 
                        especialización en Docencia, en el segundo semestre de cursada. Nuestro proyecto consiste en la 
                        implementación de un portafolio web innovador, donde exhibiremos nuestros trabajos realizados. 
                        Aspiramos a dejar un legado de nuestro compromiso y dedicación con la carrera, proporcionando 
                        material  que pueda servir como guía para aquellos estudiantes que están por embarcarse en un 
                        trayecto similar.</p>
                </div>
            </div>
            <div className="phil_mission">
                <div className="phill_img_mis"></div>
                <div className="content_text_mis">
                    <div className="phil_title_mis">
                        <p className="phil_title">Nuestra Misión</p>
                    </div>
                    <div className="phil_text_mis">
                        <p className="phil_text">Nuestra misión es transformar la manera en que se presentan y comparten 
                            los trabajos creativos mediante la implementación de un portafolio web innovador. Buscamos 
                            proporcionar a estudiantes y docentes una plataforma digital atractiva y funcional que resalte 
                            nuestro talento y experiencia de manera única.</p>
                    </div>
                </div>
            </div>
            <div className="phil_vision">
                <div className="content_text_vis">
                    <div className="phil_title_vis">
                        <p className="phil_title">Nuestra Visión</p>
                    </div>
                    <div className="phil_text_vis">
                        <p className="phil_text">Nos visualizamos como líderes en la integración de tecnologías avanzadas en 
                            el ámbito creativo, inspirando a otros estudiantes y profesionales a adoptar nuevas herramientas 
                            digitales para maximizar el impacto y alcance dentro y fuera de nuestra institución de estudio.</p>
                    </div>
                </div> 
                <div className="phil_img_vis"></div>
            </div>
        </div>
    )
}
export default About_us