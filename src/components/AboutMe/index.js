import React from "react";
import AboutMe from "../components/AboutMe";
import "./style.css";

class AboutMe extends Component {

  render() {
AboutMe = this.props.AboutMe; {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeAboutMeData(props.id)} className="remove">
        𝘅
      </span>
    </div>
)
  
}
}
}
export default AboutMe;
