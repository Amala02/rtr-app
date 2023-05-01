import  { useState, useEffect } from 'react';
import React from "react";
import "./upload.css";
import Navbar from "./NavBarComponents/navbar";
const Upload =()=>{
    const [loading, setLoading] = useState(false);
    useEffect(() => {
     setLoading(true);
     setTimeout(() => {
       setLoading(false);
     }, 16000);
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
        <div class="upload-wrap">
           <img
    class="upload-bg"
    src="https://images.pond5.com/space-doodle-089168691_prevstill.jpeg"
    alt=""
  ></img>
            <div class="upload-content">
                
                <h1 class= "upload-text">upload here</h1>
               
                
            </div>
        </div>

    </>
      )}
      </>
    );
};

export default Upload; 
