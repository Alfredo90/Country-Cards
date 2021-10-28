const Filters = ({ searchTerm, setSearchTerm , selectRegions, setSelectRegions,}) => {
  const searchChangeHandler = (e) => setSearchTerm(e.target.value);
  const selectHandler = e => setSelectRegions(e.target.value)

  return (
    <div className="flex align-items-center justify-between">
      <input
        value={searchTerm}
        type="search"
        placeholder="search..."
        onChange={searchChangeHandler}
      />
       <select value={selectRegions} onChange={selectHandler}>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
       <option value="America">America</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filters;
