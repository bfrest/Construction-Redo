import React, { useState } from "react";
import "./newService.scss";

const NewService = () => {
  const [filters, setFilters] = useState(false);

  const checkIfChecked = (e, func) => {
    func(e.target.checked);
    console.log(e.target);
  };

  console.log(filters);
  return (
    <div className="serviceModal">
      <div className="serviceInputs">
        <form>
          <input
            type="checkbox"
            name="filters"
            id="filters"
            onClick={(e) => checkIfChecked(e, setFilters)}
          />
          <label htmlFor="filters">Filters</label>

          <input name="oil" type="checkbox" />
          <label htmlFor="oil">oil</label>

          <input name="air" type="checkbox" />
          <label htmlFor="air">Filters</label>

          <button>Add Service</button>
        </form>
      </div>
    </div>
  );
};

export default NewService;
