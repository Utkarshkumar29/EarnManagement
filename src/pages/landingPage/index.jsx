import React from "react";
import Navbar from '../../components/navbar'
import Gorilla from '../../views/gorilla'
import styled from 'styled-components'
import Roadmap from "../../views/roadmap";
import Contact from "../../views/contact";
import Footer from "../../components/footer";


const Global=styled.body`
       background-image: url('../../assets/images/Background.png');
`

const landingPage=()=>{
    return(
        <>
            <Global>
            <Navbar/>
            <Gorilla />
            <Roadmap />
            <Contact/>
            <Footer/>
            </Global>
        </>
    )
}

export default landingPage