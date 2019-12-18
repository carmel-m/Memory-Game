import React from "react";
import Counter from "../Counter";

function Header() {
  return (
    <div className="container border">
      <div className="row border">
        <div className="col-9 border">Memory Game</div>
        <div className="col-3 border"><Counter /></div>
      </div>
    </div>
  );
}

export default Header;
