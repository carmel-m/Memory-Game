import React from "react";
import Counter from "../Counter";

function Header(props) {
  return (
    <div className="container header">
      <div className="row">
        <div className="col-sm-12 header-text">Australian Animal Memory Game</div>
      </div>
      <div className="row">
        <div className="col-sm-12 counter-text">
          <Counter count={props.count} />
        </div>
      </div>
    </div>
  );
}

export default Header;
