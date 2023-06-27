import React, { useState, useEffect } from 'react';
import './App.scss';
import CitySearch from './components/CitySearch';

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=leicester&appid=91e67ffed73746764541a75deddc7e49`

const App = () => {

  const [weather, setWeather] = useState([]);
  
  const getWeather = async () =>{
    const response = await fetch (API_URL);
    const data = await response.json();
    console.log(data)
    setWeather(data)
  }
  
  useEffect(() => {
    getWeather();
  },[]);

  return (
    <>
      <h1>React Weather API</h1>
      <CitySearch />
    </>
  );
};

export default App;
