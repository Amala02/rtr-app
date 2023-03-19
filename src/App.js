import React from "react";

import { ReactDOM } from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./components/index"
//import play from  "C:\Users\shwetah\rtr-app\src\components\play.js";
import Upload from "./components/Upload";
import Play from "./components/play";
//mport Layout from "./Layout";
import Navbar from "./NavBarComponents/navbar";

export default function App(){
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path= "/home" element ={<Home />} />
        <Route path ="/play" element= {<Play/>} />
        <Route path= "/upload" element= {<Upload/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

