import React from "react";

const DestinationCard = (props) => {
  return (
    <div className="destination-card">
      <img src={props.image} alt={props.name} className="destination-image" />
      <h2>{props.name}</h2>
      <p>{props.location}</p>
      <p>{props.description}</p>
      <p><strong>{props.price}</strong></p>
    </div>
  );
};

export default DestinationCard;
