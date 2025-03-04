import React, { useState, useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Datacards.css"

function Datacards() {
  const [temp, setTemp] = useState(0);
  const [pm25, setPm25] = useState(0);
  const [pm10, setPm10] = useState(0);
  const [aqi, setAqi] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://api.thingspeak.com/channels/2322148/feeds.json?api_key=UAK6R7X9P7F4GKS8&results=1")
        .then(response => response.json())
        .then(data => {
          const latestFeed = data.feeds[data.feeds.length - 1];
          setTemp(latestFeed.field1);
          setPm25(latestFeed.field3);
          setPm10(latestFeed.field4);
          setAqi(latestFeed.field2); // replace 0 with the formula to calculate AQI based on pm25 and pm10 values
        })
        .catch(error => console.log(error));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cards">
      <div className="card1">
        <h3>NODE 1</h3>
        </div>
      <div className="card1">
        <h3>Temp</h3>
        <div className="Progress">
          <CircularProgressbar value={temp}  text={temp}/>
        </div>
        
      </div>
      <div className="card2">
        <h3>PM 2.5</h3>
        <div className="Progress">
          <CircularProgressbar value={pm25}  text={pm25}/>
        </div>
        
      </div>
      <div className="card3">
        <h3>PM 10</h3>
        <div className="Progress">
          <CircularProgressbar value={pm10}  text={pm10}/>
        </div>
      </div>
      <div className="card4">
        <h3>AQI</h3>
        <div className="Progress">
          <CircularProgressbar value={aqi}  text={aqi}/>
        </div> 
      </div>
    </div>
    
  );
}

export default Datacards;
