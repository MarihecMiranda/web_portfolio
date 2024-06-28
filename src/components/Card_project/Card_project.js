import React, {useState, useEffect} from "react";
import img1 from "../../assets/infographics_img/psicologia_como_ciencia.jpg"
import pdf from "../../assets/infographics_pdf/psicologia_como_ciencia.pdf"
import Details_project from "../Details_project/Details_project"
import "./Card_project.css"
import {assignment} from "../../data/assignment"

const Card_project = () => {

    const [id, setId] = useState("")
    
    let infographics = assignment.filter((datas) => datas.type===1);
    console.log(infographics)

    let projects = assignment.filter((datas)=> datas.type===2)
    console.log(projects)

    function openPopup(id) {
        setId(id);
        document.getElementById('popup').style.display = 'flex';
    }
    
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    const truncateText = (element, maxWords) => {
        if (!element || !element.innerText) return;
        
        let text = element.innerText.trim();
        let words = text.split(/\s+/);

        if (words.length > maxWords) {
            let truncatedText = words.slice(0, maxWords).join(' ') + '...';
            element.innerText = truncatedText;
        }
    };

    useEffect(() => {
        const descriptions = document.querySelectorAll('.descrip_project');
        descriptions.forEach(description => {
            truncateText(description, 10);
        });
    }, );

    useEffect(() => {
        const name = document.querySelectorAll('.name_project');
        name.forEach(name => {
            truncateText(name, 5);
        });
    }, );


    truncateText('myParagraph', 0);

    return(
        <div>
            <div className="list_card_project">
                <p className="title_infographics">Infografías</p>
                <div className="Infographics">
                    {infographics.map((data) => (
                        <a className="card_project" onClick={() => openPopup(data.id)} key={data.id}>
                            <div className="content_project">
                                <div className="img_card_project"><img src={data.url_img}/></div>
                                <p className="name_project">{data.name}</p>
                                <p className="descrip_project">{data.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <p className="title_projects">Proyectos</p>
                <div className="Projects">
                    {projects.map((data) => (
                        <a className="card_project" onClick={() => openPopup(data.id)} key={data.id}>
                            <div className="content_project">
                                <div className="img_card_project"><img src={data.url_img}/></div>
                                <p className="name_project">{data.name}</p>
                                <p className="descrip_project" >{data.description}</p>
                            </div>
                        </a>
                    ))} 
                </div>
            </div>
            <div id="popup" class="popup">
                <div class="popup-content">
                    <span class="close" onClick={closePopup}>&times;</span>
                    <div>
                        <Details_project id={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card_project