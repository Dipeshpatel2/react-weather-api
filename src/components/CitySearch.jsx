import React from 'react'
import "../components/CitySearch.scss"

const CitySearch = () => {
  return (
    <div className='search'>
        <input 
        placeholder='Search City....'
        value = ""
        onChange={""}
        className="searchBox"
        />
    </div>
  )
}

export default CitySearch