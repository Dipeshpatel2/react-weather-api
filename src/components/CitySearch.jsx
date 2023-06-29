import React from 'react';
import '../components/CitySearch.scss';

const CitySearch = ({ citySearch, setCitySearch, getWeather }) => {
  return (
    <div className='search'>
      <input
        placeholder='Search City....'
        value={citySearch}
        onChange={(event) => setCitySearch(event.target.value)}
        className='searchBox'
      />
      <button className='searchBtn' onClick={() => getWeather(citySearch)}>
        SEARCH
      </button>
    </div>
  );
};

export default CitySearch;
