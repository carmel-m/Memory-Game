import React from "react";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card p-1">
      {/* <div className="card-body"> */}
      {/* <div className="card-img"> */}
        <img className="card-img img-fluid" alt={props.name} src={props.image} id={props.id} onClick={props.whenClicked}/>
      </div>
    // </div>
    // </div>
  );
}

export default AnimalCard;


