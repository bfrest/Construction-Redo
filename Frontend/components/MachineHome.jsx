import React from "react";
import "./machineHomeStyles.scss";
import machines from "../testData";
import { Link } from "react-router-dom";

const AllMachines = () => {
  return (
    <div className="allMachines">
      {machines.map((item) => {
        return (
          <div
            className="machine-card"
            key={item.id}
            style={{
              backgroundImage: `url(${item.image})`,
            }}>
            {/*  this should be wrapped around the image somehow....maybe different way of laying out the card*/}
            <button>
              <Link to={{ pathname: `/machine/${item.id}` }}>Machines</Link>
            </button>
            <div className="bottomBtns">
              <button className="serviceBtn">Service</button>
              <button className="inspectionBtn">Inspection</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllMachines;
