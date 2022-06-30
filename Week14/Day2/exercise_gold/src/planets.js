import React from "react";

const PlanetList = ({ planet }) => {
  return (
    <div>
      {planet.map((item, i) => (
        <ul className="list-group" key={i}>
          <li className="list-group-item">{item} </li>
        </ul>
      ))}
    </div>
  );
};
export default PlanetList;
