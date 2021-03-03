import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import SearchBox from "./components/SearchBox/SearchBox";
import Error from "./components/Error/Error";
import Weather from "./components/Weather/Weather";

import "./styles/App.scss";

const fetchWeatherData = async ({ queryKey }) => {
  const [_key, { location }] = queryKey;

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&}&units=metric&appid=43144028b51aafd0549fedae4b831a7c`
  );
  return response.data;
};

function App() {
  const [location, setLocation] = useState("");
  console.log(location);

  const { data, error, status } = useQuery(
    ["weatherdata", { location }],
    fetchWeatherData
  );

  console.log(data);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBox setLocation={setLocation} />
      {error && location && <Error status={status} />}
      {data && <Weather weather={data} location={location} />}
    </div>
  );
}

export default App;
