import React from "react";

const Weather = ({ weather }) => {
  return (
    <>
      <div>
        <h2>
          {weather.name}, {weather.sys.country}.
        </h2>
        <h2>{weather.weather[0].description}</h2>
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
      </div>
      <div>
        <h3>Temperature {weather.main.temp}</h3>
        <p>Temperature {weather.main.temp_max}</p>
        <p>Temperature {weather.main.temp_min}</p>
      </div>
      <div>
        <h3>Pressure {weather.main.pressure} hPa</h3>
      </div>
      <div>
        <h3>Humidity {weather.main.humidity}%</h3>
      </div>
    </>
  );
};

export default Weather;
