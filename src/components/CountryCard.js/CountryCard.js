import { Link } from "react-router-dom";

const CountryCard = ({
  country: { name, population, flags, region, capital },
}) => {
  // const formattedPopulation = population.replace(/w/g, () => )
  return (
    <li className="flex flex-row flex-wrap m-80 ">
      <Link to={`/countries/${name.toLowerCase()}`}>
        <div className=" w-262 h-336 border-none shadow rounded-md dark:bg-gray-700">
          <img
            src={flags.png}
            alt={name}
            className="w-262 h-160  rounded-md object-fill "
          />
          <div className="w-262 h-174 flex flex-col justify-center align-items-center pl-16 dark:text-white">
            <h2 className="text-24">{name}</h2>
            <p className="text-14">Population: {population}</p>
            <p className="text-14">Region: {region}</p>
            <p className="text-14">Capital: {capital}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CountryCard;
