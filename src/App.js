import './App.css';
import React from "react"
import {Switch, Route, Redirect} from "react-router-dom";
import globe from "./images/globe.jpg"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Landing from './components/Landing/Landing.js';
import AppBars from './layout/AppBars';
import back from "./images/back.png"
import {Container} from '@mui/material';
import About from './components/About/About.js';
import Info from './components/Info/Info.js';
import Projects from './components/Projects/Projects.js';
import People from './components/People/People.js';


const theme = createTheme({
  typography:{
    fontFamily: "Comfortaa",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
})



function App() {
  return (
    <div >
   
   <ThemeProvider theme={theme}>
   <div>
   
   <div className="bg"></div>
   <img alt=""  src={back} className='image'/>
        <AppBars/> 
       <Landing/>
    </div>
        <About/>
        <Info />
        <Projects/>
        <People />
   </ThemeProvider>
      
    </div>
  );
}

export default App;
