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
