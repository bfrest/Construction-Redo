import React from "react";
import "./machineHomeStyles.scss";

const AllMachines = () => {
  const arrToMap = [
    {
      id: "2",
      type: "truck",
      model: "Truck 1",
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.marketingstrategiesandsolutions.com%2Fwp-content%2Fuploads%2F2014%2F01%2FStone-Slinger-Truck.jpeg.jpg&f=1&nofb=1",
      hours: 2240,
    },
    {
      id: "3",
      type: "truck",
      model: "Truck 2",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.c7Pkso-cktmnnpvS4UO5GgAAAA%26pid%3DApi&f=1",
      hours: 610,
    },
    {
      id: "24",
      type: "truck",
      model: "Truck 3",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GCi9jWy2qPTcnP-u22C0xQHaFj%26pid%3DApi&f=1",
      hours: 220,
    },
  ];
  return (
    <div className="allMachines">
      {arrToMap.map((item) => {
        return (
          <div className="machine-card">
            <h1>{item.model}</h1>
            <img src={item.img} />
            <div className="innerCard">
              <div>
                <h3>Next Service</h3>
                <p>{item.hours}</p>
              </div>

              <div>
                <h3>Last Inspection</h3>
                <p>6 Days ago</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllMachines;
