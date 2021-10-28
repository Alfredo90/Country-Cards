import CountryCard from "../CountryCard.js/CountryCard";
import {useState} from 'react'
import Filters from "../Filters.js/Filters";

const CountryCards = ({countries}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectRegions, setSelectRegions] = useState("")

  let filteredCountries = countries
  if (searchTerm.length !== 0) {
    filteredCountries = countries.filter(country => {
      return country.name.toLowerCase().includes(searchTerm.toLowerCase()); 
    })
  }

  if (countries.length === 0) return <p>Loading...</p>
  if (filteredCountries.length === 0) return <p>No Country Data Found</p>

 let filterRegions = countries.filter(country => {
   return country.region.includes(selectRegions)
 })

  return (
    <div>
      <Filters searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectRegions={selectRegions} setSelectRegions={setSelectRegions} />
      <ul className="flex flex-row flex-wrap">
        {filteredCountries.map(country => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default CountryCards
