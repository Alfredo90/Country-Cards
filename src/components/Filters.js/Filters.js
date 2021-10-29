const Filters = ({
  searchTerm,
  setSearchTerm,
  selectedRegion,
  setSelectedRegion,
}) => {
  const searchChangeHandler = (e) => setSearchTerm(e.target.value);
  const onChangeHandler = (e) => setSelectedRegion(e.target.value);

  return (
    <div>
      <div className="flex align-items-center mt-20 justify-between text-20 dark:text-white ">
        <div>
          <label>
            <input
              value={searchTerm}
              type="search"
              placeholder="Search..."
              onChange={searchChangeHandler}
              className="dark:bg-gray-700 rounded-md shadow h-56 w-480 pl-10 ml-80"
            />
          </label>
        </div>
        <div className="mr-80 ">
          <label>
            <select
              value={selectedRegion}
              onChange={onChangeHandler}
              className=" pl-14 dark:bg-gray-700 rounded-md shadow h-56 w-174"
            >
              <option value="none" disabled>
                Select a region
              </option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Oceania">Oceania</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
