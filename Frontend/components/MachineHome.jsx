import React from "react";
import "./machineHomeStyles.scss";

const AllMachines = () => {
  const arrToMap = [
    {
      id: "2",
      type: "truck",
      model: "320d",
      img: "https://res.cloudinary.com/bfrest/image/upload/v1532729559/foxridge/IMG_1333.jpg",
    },
    {
      id: "3",
      type: "skid",
      model: "299d",
      img:
        "https://media.istockphoto.com/photos/skid-loader-or-bobcat-construction-equipment-picture-id946212692?s=612x612",
    },
    {
      id: "24",
      type: "dozer",
      model: "d6",
      img:
        "https://images.pexels.com/photos/1009926/pexels-photo-1009926.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];
  return (
    <div className="allMachines">
      {arrToMap.map((item) => {
        return (
          <div className="machine-card" key={item.id}>
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
