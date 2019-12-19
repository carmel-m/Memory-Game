import React from "react";

function AnimalCard(props) {
  return (
    <div className="col-3 square">
        <img className="card-img img-fluid" alt={props.name} src={props.image} id={props.id} onClick={props.whenClicked}/>
      </div>
  );
}

export default AnimalCard;


