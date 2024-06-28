import React from "react";
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import {
    BsTelephone,
    BsInstagram,
    BsFacebook
} from 'react-icons/bs'
import { FaWhatsapp } from "react-icons/fa";

const Icons = ({ icon, className = '' }) => {

    const selectIcon = () => {
        let element = <div></div>
        switch (icon) {
            case 'instagram':
                element = <BsInstagram className={className} />
                break;
            case 'facebook':
                element = <BsFacebook className={className} />
                break;
            case 'telefono':
                element = <BsTelephone className={className} />
                break;
            case 'location':
                element = <HiOutlineLocationMarker className={className} />
                break;
            case 'whatsapp':
                element = <FaWhatsapp className={className} />
                break;
            case 'email':
                element = <HiOutlineMail className={className} />
                break;
        }
        return element
    }

    return (
        selectIcon()
    )
}

export default Icons