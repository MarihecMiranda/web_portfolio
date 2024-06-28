import React from "react";
import { saveAs } from 'file-saver';
import { assignment } from "../../data/assignment";
import './Details_project.css'

const Details_project = ({id}) => {

    let data = assignment.filter((datas) => datas.id===id);

    function descargarPDF(pdf) {
        saveAs(pdf, 'archivo.pdf');
    };

    function abrirPDF(pdf) {
        window.open(pdf, '_blank');
    };

    return (
        <div className="Content_details_project">
            {data.map ((data)=>(
                <div className="details_p" key={data.id}>
                    <div className={data.type===1
                            ?"img_infographic"
                            :"img_project"}>
                        <img src={data.url_img}/>
                    </div>
                    <div className="Details_project">
                        <p className="name">{data.name}</p>
                        <p className="desc">{data.description}</p>
                        <div className="btn_project">
                            <button onClick={() => abrirPDF(data.url_pdf)} className="button_green">Abrir</button>
                            <button onClick={() => descargarPDF(data.url_pdf)} className="button_green">Descargar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details_project