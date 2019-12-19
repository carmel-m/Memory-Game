import React from "react";

function Counter(props) {

    return (
        <div className="container border">
            Current Score: {props.count}
        </div>
    )
}

export default Counter;
