import React from "react";

export default function Card(props) {
  return (
    <div className="cards">
      <div style={{ display: "flex" }}>
        <img className="icon" src={props.icon} alt="icon" />
        <p className="label">{props.label}</p>
      </div>
      <h1 className="number">{props.number}</h1>
    </div>
  );
}
