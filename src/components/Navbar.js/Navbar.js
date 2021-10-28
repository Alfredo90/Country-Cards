import { ReactComponent as MoonIcon } from "../../assets/moon.svg";

const Navbar = () => {
  return (
    <div className="m-20">
      <div  className=" flex justify-between align-items-center  ">

      <div className=" text-24">
        <h1>Where in the World?</h1>
      </div>
      <ul className="flex border-2 justify-center align-items-center m-10 ">
        <li><MoonIcon className="w-16 h-24 mr-6"/></li>
        <li className="text-16 ">Dark Mode</li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
