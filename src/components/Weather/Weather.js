import React from "react";

import "../../styles/Weather.scss";

const Weather = ({ weather, location }) => {
  return (
    <div className="weather">
      <div className="details">
        <div className="info">
          <h2 className="location">
            {location}, {weather.sys.country}
          </h2>
          <h2 className="small-info">{weather.weather[0].description}</h2>
        </div>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
        </div>
      </div>
      <div className="vitals">
        <div className="temp">
          <h3>Temperature</h3>
          <h3>{weather.main.temp} &deg; C</h3>
        </div>
        <div className="pressure">
          <h3>Pressure</h3>
          <h3> {weather.main.pressure} hPa</h3>
        </div>
        <div className="humidity">
          <h3>Humidity </h3>
          <h3>{weather.main.humidity}%</h3>
        </div>
      </div>
    </div>
  );
};

export default Weather;
