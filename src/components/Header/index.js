import React from "react";
import Counter from "../Counter";

function Header(props) {
  return (
    <div className="container border">
      <div className="row border">
        <div className="col-9 border">Memory Game</div>
        <div className="col-3 border"><Counter 
        count={props.count}
        /></div>
      </div>
    </div>
  );
}

export default Header;
