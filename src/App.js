import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Poster from './Components/Poster/Poster';
import About from './Components/About/About';
import Contents from './Components/Contents/Contents';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import ProgramPage from './Components/ProgramPage';


const App = () => {
  return (
    <>
     <Router>
       <NavBar/>
       <Routes>
      <Route path="/" exact element={<HomePage/> } /> 
      <Route path="/program" element={<ProgramPage/> } /> 
      
    </Routes>
  </Router>
      
      <Poster/>
      <About/>
      <Contents/>
    </>
  )
}

export default App;
