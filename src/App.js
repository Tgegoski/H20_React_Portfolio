import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import WorkList from "./components/WorkList";
import ContactMe from "./components/ContactMe";
import WorkItem from "./workItem.json";
import Nav from "components/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path={["/aboutMe"]}>
            <AboutMe />
          </Route>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path={["/", "/workList"]}>
            <WorkList />
          </Route>
          <Route exact path={["/contactMe"]}>
            <ContactMe />
          </Route>
        </Switch>
        </div>
      
    </Router>
  );
}

export default App;
