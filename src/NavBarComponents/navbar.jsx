import React from "react";
//import { BrowserRouter, Route, Link } from "react-router-dom";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "./NavElement";
const Navbar= () =>{
  return(
   <>
    <PrimaryNav>
      <Hamburger/>
      <Menu>
        <MenuLink to= "/home" activeStyle>
          Home
          
        </MenuLink>
        <MenuLink to= "/play" activeStyle>
          Play
        </MenuLink>
        <MenuLink to= "/upload" activeStyle>
          Upload
        </MenuLink>
      </Menu>
    </PrimaryNav>

   
   </>
    
  );
};

export default Navbar;