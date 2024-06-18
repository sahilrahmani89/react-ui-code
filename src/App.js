import React from "react";
import './App.css'
import { Routes,Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BoxClick from "./pages/BoxClick";



function App() {
 
  
  return (
    <>
      <Routes>
        <Route 
          Component={Homepage} 
          path="/"
        />
        <Route 
         Component={BoxClick} 
         path="/box"
        />
      </Routes>
    </>
  );
}

export default App;
