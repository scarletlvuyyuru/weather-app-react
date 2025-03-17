import React, {useState} from "react";
import Search from "./Search";
import './Forecast.css';
import App from "./App";
import axios from "axios";

export default function Forecast(props) {
    
        let weatherData = {
          city: "New York",
          temperature: 19,
          date: "Tuesday at 10:00",
          description: "Cloudy",
          humidity: 80,
          wind: 10,
          imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        };
        return (
    <div>
      <div className="Weather">
        <div className="overview">
          <h1>{weatherData.city}</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="temperature-container">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="weatherIcon"
                />
                <span className="temperature-wrapper">
                  <strong className="temperature">
                    {weatherData.temperature}
                  </strong>
                  <span className="units">
                    <a href="/" className="deg">
                      °C
                    </a>{" "}
                    |{" "}
                    <a href="/" className="deg">
                      °F
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="details">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <div> <Search /></div>
     </div>
</div>
       

        
              
             
               
            <div className="flex-container">
            <div className="col"> DOW <ul className="items">
                
                <li>Temperature</li>
                <li>Icon</li>
            </ul>
            </div>
            <div className="col">DoW<ul className="items">
                
                <li>Temperature</li>
                <li>Icon</li>
            </ul></div>
            <div className="col">DoW<ul className="items">
                
                <li>Temperature</li>
                <li>Icon</li>
            </ul></div>
            <div className="col">DoW <ul className="items">
                
                <li>Temperature</li>
                <li>Icon</li>
            </ul></div>
            <div className="col">DoW<ul className="items">
                
                <li>Temperature</li>
                <li>Icon</li>
            </ul></div>
            <div className="col">DoW <ul className="items">
                
                <li>Temperature</li>
                <li>Icon</li>
            </ul></div>
            </div>
            
            <div>
          <p className="updatedDetails"> Updated on {weatherData.date}</p>
        </div>
     

      <footer>
        <p>
          <a
            className="link"
            href="https://github.com/scarletlvuyyuru/weatherapp-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Scarlet Vuyyuru, hosted on{" "}
          <a
            className="link"
            href="https://relaxed-lolly-4c1367.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify{" "}
          </a>
      
        </p>
      </footer>

    </div>
    );
  }

