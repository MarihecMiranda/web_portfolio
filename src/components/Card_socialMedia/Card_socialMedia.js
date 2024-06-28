import React, {useState} from "react";
import Icons from "../Icons/Icons";
import { social_media } from "../../data/social_media";
import './Card_socialMedia.css'

const Card_socialMedia = () => {
    const [activeSM] = useState(null)
    return(
        <div className="contact_sm">
        <div className="Content_card_sm">
            <p className="title">Contactanos!</p>
            <div className="list_card_sm">
                {social_media.map((data) => (
                        <a>
                            <div className="icon_sm">
                                <Icons className="icon" icon={data.icon}/>
                            </div>
                            <p className="inf1_sm">{data.name}</p>
                            <p className="inf2_sm">{data.user}</p>
                            <p className="inf3_sm">{data.desc}</p>
                        </a>
                ))} 
            </div>
        </div>
        </div>
    )
}

export default Card_socialMedia