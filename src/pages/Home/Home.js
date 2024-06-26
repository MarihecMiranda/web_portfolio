import React from "react";
import Container from '../../components/Container/Container'
import Welcome from "../../components/Welcome/Welcome";
import Presentation from "../../components/Presentation/Presentation";

const Home = () => {


    return(
        <div>
            <Container item={1}>
                <Welcome/>
                <Presentation/>
            </Container>
        </div>
    )
}
export default Home