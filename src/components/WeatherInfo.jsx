import React, { useEffect, useState } from "react";
import "../css/weatherInfo.css"; 
import axios from "axios";

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const access_key = "7639e3cf45fb24e9f91bbedcedb8a842";

  useEffect(() => {
    axios
      .get(`https://api.weatherstack.com/current?access_key=${access_key}&query=Bangalore`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <div className="weather-info">
      {weather && weather.current ? (  // Checking weather and weather.current exist or not
        <p>Temperature: {weather.current.temperature}°C in Benagaluru</p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherInfo;
