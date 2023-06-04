import React from "react";
import "./Home-style.css";
import createTheme from "@mui/material/";
import '@mui/material';
import TextField from '@mui/material/TextField';
import backgroundVideo from './pexels-videographer-shiyaz-4010941-3840x2160-25fps.mp4';
import  { useState, useEffect } from 'react';
import Navbar from "./NavBarComponents/navbar";


function Home() {
    
    const [loading, setLoading] = useState(false);
   useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 16000);
  }, []);
 
 
    
    return (
        <>
        {loading ? (
          <div className="loading-page">
            <img id="load-gif" src={require('./MPiJ.gif')} alt="loading..." />
            <p id="load"> Getting the page ready...</p>
            
            <div className="loader-container">
              <div className="loader"></div>
              
            </div>
          </div>
          ) :(
          <>
          <Navbar/>
          <div className="Home">
        <div className="home-wrap">
        
        

           
        <div id="rand-img" >
            <img id="travel-img" src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?cs=srgb&dl=pexels-leah-kelley-3935702.jpg&fm=jpg" alt="travelpic"/>
            
        </div>
       

       <div id="head">
        <h1 id="headid">MadeSimple</h1>
        <TextField id="search-bar" label="Enter location" variant="filled"
         sx={{
            
            color: 'white',
          }} />
        </div >
        

      </div>

      <div id="welcome" >
       
    
   <div id="vid">
      <video autoPlay loop muted id="welcome-vid"  >
		<source src={backgroundVideo} type='video/mp4' resizeMode="stretch" />
	  </video>
    </div>  
    <div id="content">
    <p id="content-text">
      We understand just how difficult and scary travelling to places must be. But we can't
      let the traveler in you shun away, can we? This is where MadeSimple comes in. Click any place you want and in one go
      you'll be learning the in's and out's to get acquainted in no time
      </p>
   </div>
       
       </div>
       </div>
         
          </>
          
          )}
          </>
   
   );
};

   

export default Home;














