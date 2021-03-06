import React from "react";

function Instructions() {
  return (
    <div className="container instructions">
      <div className="row inner-text">
        <div className="col-sm-12">
          Click on any animal to begin! The cards will randomly reshuffle after
          each click, and the game is won when all 12 animals have been clicked
          once. If you click on an animal more than once, your score will be
          reset to 0 and the game will restart.
        </div>
      </div>
    </div>
  );
}

export default Instructions;
