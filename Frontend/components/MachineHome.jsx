import React, { useState } from "react";
import "./machineHomeStyles.scss";
import machines from "../testData";
import { Link } from "react-router-dom";
import NewService from "./NewService";

const AllMachines = () => {
  const [serviceModal, setServiceModal] = useState(false);
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
            <Link className="moreInfo" to={{ pathname: `/machine/${item.id}` }}>
              <button>i</button>
            </Link>
            <div className="bottomBtns">
              <button className="serviceBtn" onClick={() => setServiceModal(!serviceModal)}>
                Service
              </button>

              <button className="inspectionBtn">Inspection</button>
            </div>

            {serviceModal && <NewService />}
          </div>
        );
      })}
    </div>
  );
};

export default AllMachines;
