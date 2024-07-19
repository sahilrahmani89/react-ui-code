import React from "react";
import './App.css'
import { Routes,Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BoxClick from "./pages/BoxClick";
import Comment from "./components/comment/Comment";



function App() {
 
  
  return (
    <>
      <Routes>
        <Route 
          element={<Homepage/>} 
          path="/"
        />
        <Route 
         element={<BoxClick/>} 
         path="/box"
        />
        <Route
          element={<Comment isRecursive={false} />}
          path="/comment-widget"
        />
      </Routes>
    </>
  );
}

export default App;
