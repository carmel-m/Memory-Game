import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Instructions from "./components/Instructions";
// import Wrapper from "./components/Wrapper";
// import AnimalCard from "./components/AnimalCard";


class App extends Component {

  //manage state here 

  //logic for clicks

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Header>
              <Counter />
            </Header>
            <Instructions />

            {/* Map components here */}
          </div>
        </div>
        {/* // <Wrapper>
        //   <AnimalCard />
        // </Wrapper> */}
      </div>
    );
  }
}

export default App;
// function App() {

//     return (
//       <div>
//         <Header>
//           <Counter />
//         </Header>

//         <Instructions />
//         <Wrapper>
//           <AnimalCard />
//         </Wrapper>

//       </div>
//     );

// };

// export default App;

// import React from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import friends from "./friends.json";
// import "./App.css";

// class App extends React.Component {
//   // set state to friends.json
//   state = {
//     friends
//   };

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

// export default App;
