import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


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
//   }

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