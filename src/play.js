import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./play.css";
import  { useState, useEffect } from 'react';
import Navbar from "./NavBarComponents/navbar";


const Play= ()=> {
    const [loading, setLoading] = useState(false);
   useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }, []);

    return(
        <>
        {loading ? (
            <div className="loader-container">
              <div className="loader"></div>
              
            </div>
          ) :(
          <>
          <Navbar/>
        <div className="Play-wrap">
            <button class="play-btn" >play</button>
            <div id="latlong"></div>
      </div>
        </>
          )}
          </>
    );
};





export default Play;

