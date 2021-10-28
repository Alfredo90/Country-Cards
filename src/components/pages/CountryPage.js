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
    <div className="">
      <div className="flex  align-items-center justify-star mt-20 ml-80 dark:text-white  ">
        <BackButton/>
      </div>
      <div className="flex justify-between align-items-center m-80">
        <div className="">
          <img
            src={country.flags.png}
            alt={country.name}
            className="h-401 w-560"
          />
        </div>
        <div className="flex justify-center align-items-center h-full w-100 dark:bg-gray-800 h-100vh dark:text-white ">
          <div>

          <ul>
            <h1 className="">{country.name}</h1>
            <li>Native Name: {country.nativeName}</li>
            <li>Population: {country.population}</li>
            <li>Region: {country.region}</li>
            <li>Sub Region: {country.subregion}</li>
            <li>Capital: {country.capital}</li>
          </ul>
          </div>
          <div>

          <ul>
            <li>Top Level Domain: {country.topLevelDomain}</li>
            <li>Currencies: {country.currencies[0].name}</li>
            <li>Languages: {country.languages[0].name}</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
