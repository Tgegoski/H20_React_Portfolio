import React, { Component } from "react";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Title from "./components/Title";
import Contact from "./components/Contact";
import WorkItem from "./workItem.json";

class App extends Component {
  // Setting this.state.portfolio to the portfolio json array
  state = {
    aboutMe
  };

  removeWorkItem = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
    
        <Title>Work List</Title>
        {this.state.friends.map(friend => (
          <AboutMe
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
  
    );
  }
}

export default App;
