import React, { useState, useEffect } from 'react';
import './App.scss';
import CitySearch from './components/CitySearch';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '91e67ffed73746764541a75deddc7e49';

const App = () => {
  const [weather, setWeather] = useState({});
  const [citySearch, setCitySearch] = useState('');
  const [cityFound, setCityFound] = useState(true);

  const getWeather = async () => {
    const url = `${API_BASE_URL}?q=${citySearch}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.cod === '404') {
      setCityFound(false);
    } else {
      setCityFound(true);
      setWeather(data);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <h1 className='mainTitle'>React Weather API</h1>
      <CitySearch citySearch={citySearch} setCitySearch={setCitySearch} getWeather={getWeather} />
      {!cityFound && (
        <div className="no-data-found">No data found for the specified city.</div>
      )}
      {weather.main && (
        <div className="weather-data">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
    </>
  );
};

export default App;
