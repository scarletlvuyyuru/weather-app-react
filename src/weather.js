import React, {useState} from "react";
import axios from "axios";

export default function weather(props) {
    const [temperature, setTemperature] = useState(null);
  
    function showTemperature(response) {
      setTemperature(response.data.temperature.current);
    }
  
    if (temperature) {
      return (
        <h4>
          The temperature in {props.city} is {Math.round(temperature)}°C
        </h4>
      );
    } else {
      const url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=61e11tf2503b89498d076obf6bbaf870&units=metric`;
  
      axios.get(url).then(showTemperature);
      return <h4>Loading temperature for {props.city}...</h4>;
    }
  }