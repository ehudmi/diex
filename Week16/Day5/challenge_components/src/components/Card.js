import React from "react";

function Card(props) {
  return (
    <div>
      <img src={props.icon} alt="card" />
      <p>{props.label}</p>
      <h1>{props.number}</h1>
    </div>
  );
}

export default Card;
