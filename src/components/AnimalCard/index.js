import React from "react";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card">
      <div className="card-body">
      <div className="card-img">
        <img alt={props.name} src={props.image} id={props.id} onClick={props.whenClicked}/>
      </div>
    </div>
    </div>
  );
}

export default AnimalCard;


