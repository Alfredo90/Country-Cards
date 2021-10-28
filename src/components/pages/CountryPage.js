import { useParams } from "react-router";
import BackButton from "./BackButton";

const CountryPage = ({ countries }) => {
  const { countryName } = useParams();
  const [country] = countries.filter(
    ({ name }) => countryName === name.toLowerCase()
  );

  if (!country) return <p>no country found</p>;
  // className="flex justify-evenly align-items-center"
  return (
    <div>
      <div>
        <BackButton />
      </div>
      <div >
        <div className="">
          <img src={country.flags.png} alt={country.name} />
        </div>
        <div className="flex">
          <ul>
            <h1>{country.name}</h1>
            <li>Native Name: {country.nativeName}</li>
            <li>Population: {country.population}</li>
            <li>Region: {country.region}</li>
            <li>Sub Region: {country.subregion}</li>
            <li>Capital: {country.capital}</li>
          </ul>
          <ul>
            <li>Top Level Domain: {country.topLevelDomain}</li>
            <li>Currencies: {country.currencies[0].name}</li>
            <li>Languages: {country.languages[0].name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
