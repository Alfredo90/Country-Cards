import { ReactComponent as MoonIcon } from "../../assets/moon.svg";

const Navbar = () => {
  return (
    <div className="h-80 pt-20  border-color-gray-700 shadow dark:bg-gray-700">
      <div className=" flex justify-between align-items-center dark:text-white ">
        <div className=" text-24 ml-80 ">
          <h1>Where in the World?</h1>
        </div>
        <div className="flex  mr-80">
          <ul className="flex  justify-center align-items-center m-10 ">
            <li>
              <MoonIcon className="w-16 h-24 mr-6 " />
            </li>
            <li className="text-16 ">Dark Mode</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
