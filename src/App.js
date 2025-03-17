import React from "react";
import Forecast from "./Forecast";
import Search from "./Search";


import './App.css';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
       
        <h1>
          Weather App
        
        </h1>
      
      </header>
      
       <div className="App">
       <h2>City Info</h2>
     
      <Forecast />
     </div>
     </div>
  );
}

export default App;
