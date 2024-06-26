import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Container = ({children, item}) =>{
    return(
        <div>
            <Navbar />
                {children}
            <Footer active={item}/>
        </div>
    )
}

export default Container