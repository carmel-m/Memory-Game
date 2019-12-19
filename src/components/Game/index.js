import React, { Component } from "react";
import Header from "../Header";
import Instructions from "../Instructions";
import Wrapper from "../Wrapper";
import AnimalCard from "../AnimalCard";
import animals from "../../components/AnimalData/animals.json";
import arrayShuffle from "array-shuffle";

class App extends Component {
  state = {
    animals,
    counter: 0,
    clicked: []
  };

  // ========== LOGIC ==========

  whenClicked = event => {
    let counter = this.state.counter;
    let click = this.state.clicked;

    click.forEach(id => {
      if (id === event.target.id) {
        alert("Game over");
        window.location.reload();
      }
    });

    click.push(event.target.id);
    counter += 1;
    if (counter === 12) {
      alert("You won");
      window.location.reload();
    }

    this.randomize();
    this.setState({ counter, clicked: click });
    // console.log(event.target.id);
  };

  randomize = () => {
    let random = arrayShuffle(this.state.animals);
    this.setState({ animals: random });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Header count={this.state.counter} />
            <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Instructions />
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <Wrapper>
            <div className="row card-row">
              {this.state.animals.map(animal => (
                <AnimalCard
                  id={animal.id}
                  key={animal.id}
                  name={animal.name}
                  image={animal.image}
                  whenClicked={this.whenClicked}
                />
              ))}
            </div>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;

