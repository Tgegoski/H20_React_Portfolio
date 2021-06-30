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
    // Filter this.state.work for work with an id not equal to the id being removed
    const work = this.state.work.filter(work => work.id !== id);
    // Set this.state.work equal to the new work array
    this.setState({ work });
  };

  // Map over this.state.work and render a WorkCard component for each work object
  render() {
    return (
    
        <Title>Work List</Title> 
        {this.state.work.map(work => (
          <AboutMe
            removeWork={this.Work}
            id={work.id}
            key={work.id}
            name={work.name}
            image={work.image}
            occupation={work.occupation}
            location={work.location}
          />
        ))}
  
    );
  }
}

export default App;
