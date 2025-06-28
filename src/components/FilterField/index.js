const FilterField = () => {
  return (
    <div className="d-flex flex-column">
      <h6>Filter</h6>
      <input className="m-2" type="radio" value="firm" name="filter" checked />
      Show All
      <input className="m-2" type="radio" value="ind" name="filter" />
      Active Only
    </div>
  );
};

export default FilterField;
