import React from "react";
import "./newService.scss";

const NewService = () => {
  return (
    <div className="serviceModal">
      <div className="serviceInputs">
        <form>
          <input type="text" placeholder="filters" />
          <input type="text" placeholder="filters" />
          <input type="text" placeholder="filters" />
          <input type="text" placeholder="filters" />
          <button>Add Service</button>
        </form>
      </div>
    </div>
  );
};

export default NewService;
