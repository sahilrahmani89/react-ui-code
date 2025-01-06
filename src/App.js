import React from "react";
import './App.css'
import { Routes,Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BoxClick from "./pages/BoxClick";
import Comment from "./components/comment/Comment";
import CreateCircle from "./components/createCircle/CreateCircle";
import Bar from "./components/bar/Bar";
import PriceMul from "./pages/PriceMul";
import MouseCircle from "./pages/MouseCircle";
import StopWatch from "./components/stopwatch/StopWatch";
import TripleClick from "./components/tripleclick/TripleClick";



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
        <Route
         element ={<CreateCircle/>}
         path="/create-circle"
         />
        <Route
         element ={<Bar/>}
         path="/bar"
         />
         <Route
         element ={<PriceMul/>}
         path="/pricemul"
         />
         <Route
         element ={<MouseCircle/>}
         path="/mousecircle"
         />
         <Route
          element={<StopWatch/>}
          path="/stopwatch"
         />
         <Route
          element={<TripleClick/>}
          path="/tripleclick"
         /> 
         {/* when we click thrice time it should show UI on the basis of interval */}
      </Routes>
    </>
  );
}

export default App;
