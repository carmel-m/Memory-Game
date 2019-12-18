import React from "react";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card" id={props.id} onClick={props.whenClicked}>
      <div className="card-img-top">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default AnimalCard;


