import { useParams } from "react-router";
import BackButton from "./BackButton";

const CountryPage = ({ countries }) => {
  const { countryName } = useParams();
  const [country] = countries.filter(
    ({ name }) => countryName === name.toLowerCase()
  );

  if (!country)
    return <p className="w-100 h-100vh dark:bg-gray-800">no country found</p>;

  const list = [
    { property: "Native Name", value: country.nativeName },
    { property: "Population", value: country.population },
    { property: "Region", value: country.region },
    { property: "Sub Region", value: country.subregion },
    { property: "Capital", value: country.capital },
    { property: "Top Level Domain", value: country.topLevelDomain },
    { property: "Currencies", value: country.currencies[0].name },
    { property: "Languages", value: country.languages[0].name },
  ];

  return (
    <div className="w-100 h-100vh dark:bg-gray-800 ">
      <div className="mt-20 ml-80 dark:text-white  ">
        <BackButton />
      </div>
      <div className="flex justify-center items-center mt-80 ">
        <div className="flex justify-center items-center">
          <img
            src={country.flags.png}
            alt={country.name}
            className="h-401 w-560 "
          />
          <div className="flex flex-col h-full w-100 dark:text-white">
            <h1 className="text-24 font-bold ml-64">{country.name}</h1>
            <ul className="h-210 mt-16 mr-210 flex flex-col flex-wrap">
              {list.map(({ property, value }) => (
                <li
                  key={property}
                  className="text-16 font-extralight mt-10 ml-64"
                >
                  <span className="text-16 font-medium mr-4">{property}: </span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
