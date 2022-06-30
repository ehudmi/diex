import React from "react";

const BootstrapCard = ({ title, image, buttonLabel, button, description }) => {
  return (
    <div className="card m-5" style={{ width: "30rem" }}>
      <img className="card-img-top" src={image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{title} </h5>
        <p className="card-text">{description}</p>
        <a href={button} className="btn btn-primary">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};
export default BootstrapCard;
