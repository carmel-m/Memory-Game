import React from "react";
import Counter from "../Counter";

function Header(props) {
  return (
    <div className="container">
      <div className="row border">
        <div className="col-sm-9">Memory Game</div>
        <div className="col-sm-3"><Counter 
        count={props.count}
        /></div>
      </div>
    </div>
  );
}

export default Header;
