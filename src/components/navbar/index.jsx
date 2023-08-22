import React from "react";
import { useState } from "react";
import Logoimg from '../../assets/images/Logoimage.png'
import Discord from '../../assets/images/Discord.png'
import Twitter from '../../assets/images/Twitter.png'
import { Logo,Nav,Menuwrapper,MenuContent,Linkwrapper,Bar,HamburgerMenu,HamContent,Cross,Link } from "../../styles/navbar";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar=()=>{
    
    const [ham, setham] = useState(false);

    return (
      <Nav>
        <Logo src={Logoimg} alt="error"></Logo>
        <Menuwrapper>
          <MenuContent>Road Map</MenuContent>
          <MenuContent>Contact</MenuContent>
          <MenuContent>Blog</MenuContent>
        </Menuwrapper>
        <Linkwrapper>
          <img src={Discord} alt="error"></img>
          <img src={Twitter} alt="error"></img>
        </Linkwrapper>

        <Bar>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setham(!ham);
            }}
          />
        </Bar>

        {ham && (
          <HamburgerMenu>
            <HamContent >Road Map</HamContent>
            <HamContent>Contact</HamContent>
            <HamContent>Blog</HamContent>

            <Link>
            <img src={Discord} alt="error"></img>
            <img src={Twitter} alt="error"></img>
            </Link>

            <Cross><FontAwesomeIcon
              icon={faTimes}
              onClick={() => {
                setham(!ham);
              }}
            /></Cross>
          </HamburgerMenu>
        )}
      </Nav>
    );
}

export default Navbar