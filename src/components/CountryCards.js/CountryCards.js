import CountryCard from "../CountryCard.js/CountryCard";
import {useState} from 'react'
import Filters from "../Filters.js/Filters";

const CountryCards = ({countries}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('none')

  if (countries.length === 0) return <p>Loading...</p>

  const filteredCountries = countries.filter(({ name, region }) => {
    const filterByRegion = selectedRegion !== 'none' 
      ? region.includes(selectedRegion)
      : true

    const filterByName = searchTerm.length !== 0
      ? name.toLowerCase().includes(searchTerm.toLowerCase())
      : true

    return filterByName && filterByRegion
  })

  return (
    <div>
      <Filters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      {filteredCountries.length === 0 ? <p>No Country Data Found</p> : (
        <ul className="flex flex-row flex-wrap justify-center align-items-center">
          {filteredCountries.map(country => (
            <CountryCard key={country.numericCode} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryCards