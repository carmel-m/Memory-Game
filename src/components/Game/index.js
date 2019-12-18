import React, { Component } from "react";
import Header from "../Header";
// import Counter from "../Counter";
import Instructions from "../Instructions";
import Wrapper from "../Wrapper";
import AnimalCard from "../AnimalCard";
import animals from "../../components/AnimalData/animals.json";

class App extends Component {
  state = {
    animals
  };

  // ========== LOGIC HERE ==========

  
  // WHENCLICKED()

  whenClicked = id => {
  const animals = this.state.animals;


  const click = animals.filter()
  this.state.friends.filter(
        // isClicked => isClicked.id === id
      );

      this.setState({ animals });
      this.setState({ click });
  }

  render() {
    return (
      <div className="container border">
        <div className="row border">
          <div className="col-12 border">
            <Header />
            <div className="row border">
              <div className="col-12 border">
                <Instructions />
              </div>
            </div>
          </div>
        </div>

        {/* Map components here */}

        <div className="container border">
          <Wrapper>
            <div className="row border">
            <div className="col-12 border">
              {/* {this.state.animals.map() ( */}
 <AnimalCard 
 />
              {/* )} */}
             
            </div>
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

