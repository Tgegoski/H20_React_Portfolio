import React from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import "./style.css";

class Home extends Component {

  render() {
  return (
    <div className="card" id="home">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>About Me</strong> {props.AboutMe}
          </li>
          <li>
            <strong>Work</strong> {props.Work}
          </li>
          <li>
            <strong>Contact Me</strong> {props.ContactMe}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeAboutMeData(props.id)} className="remove"> */}
        𝘅
      {/* </span> */}
    </div>
)
  
}
}

export default Home;
