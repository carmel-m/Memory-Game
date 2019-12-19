import React from "react";

function Wrapper(props) {
  return (
    <div className="container">
      {/* <div className="row"> */}
        <div className="row">{props.children}</div>
      {/* </div> */}
    </div>
  );
}

export default Wrapper;
