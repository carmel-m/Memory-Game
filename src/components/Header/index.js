import React from "react";
import Counter from "../Counter";

function Header(props) {
  return (
    <div className="container header">
      <div className="row header-text">Australian Animal Memory Game
        <div className="col-sm-3 counter-text"><Counter 
        count={props.count}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
