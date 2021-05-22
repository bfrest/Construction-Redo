import React from "react";
import { useParams } from "react-router-dom";
import machines from "../testData";
import "./viewMachine.scss";

const ViewMachine = (props) => {
  const { id } = useParams();

  const currentMachine = machines[id - 1];
  // Fetch the specific machine

  // dispalay data and graphs

  // last service, last inspection, filters, oil type

  return (
    <div className="machineBreakdown">
      <img src={currentMachine.image} height="200px" />
      <h2>{currentMachine.model}</h2>
      <p>hours: {currentMachine.hours}</p>
    </div>
  );
};

export default ViewMachine;
