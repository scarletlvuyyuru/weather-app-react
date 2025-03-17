import React from "react";
import Weather from "./Weather";
import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
       
        <h1>
          Weather App
        
        </h1>
      
      </header>
      
       <div className="App">
       <h2>Whats your weather?</h2>
       <Search />
     </div>
     </div>
  );
}

export default App;
