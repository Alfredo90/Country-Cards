import {useState} from 'react'

const SelectFilter = ({country:{region}}) => {
  const [selectRegions, setSelectRegions] = useState("")
  const selectHandler = (e) => setSelectRegions(e.target.value);
  return (
    <div>
      <select value={selectRegions} onChange={selectHandler}>
        <option value={region}>Filter by Region</option>
        
      </select>
    </div>
  );
};

export default SelectFilter;
