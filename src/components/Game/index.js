import React, { Component } from "react";
import Header from "../Header";
import Instructions from "../Instructions";
import Wrapper from "../Wrapper";
import AnimalCard from "../AnimalCard";
import animals from "../../components/AnimalData/animals.json";

class App extends Component {
  state = {
    animals,
    counter: 0,
    clicked: []
  };

  // ========== LOGIC HERE ==========

  // WHENCLICKED()

  whenClicked = event => {
    let counter = this.state.counter;
    let click = this.state.clicked;

    click.map(id => {
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

    this.setState({ counter, 
      clicked: click
     });

    console.log(event.target.id);
  };

  render() {
    return (
      <div className="container border">
        <div className="row border">
          <div className="col-sm-12 border">
            <Header count={this.state.counter} />
            <div className="row border">
              <div className="col-sm-12 border">
                <Instructions />
              </div>
            </div>
          </div>
        </div>

        {/* Map components here */}

        <div className="container border">
          <Wrapper>
            <div className="row border">
              {/* <div className="col-12 border"> */}
                {this.state.animals.map(animal => (
                  <AnimalCard
                    id={animal.id}
                    key={animal.id}
                    name={animal.name}
                    image={animal.image}
                    whenClicked={this.whenClicked}
                  />
                ))}
              {/* </div> */}
            </div>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;

//   removeFriend = id => {
//     const newFriends = this.state.friends.filter(
//       isClicked => isClicked.id !== id
//     );

//     this.setState({ friends: newFriends });
//   };

//   render() {
//     return (
//       <Wrapper>
//         <h1 className="title">Friends List</h1>
//         {this.state.friends.map(friendInfo => (
//           <FriendCard
//             name={friendInfo.name}
//             image={friendInfo.image}
//             occupation={friendInfo.occupation}
//             location={friendInfo.location}
//             key={friendInfo.id}
//             id={friendInfo.id}
//             removeFriend={this.removeFriend}
//           />
//         ))}
//       </Wrapper>
//     );
//   }
// }
