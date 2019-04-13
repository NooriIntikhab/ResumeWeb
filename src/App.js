import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./typewriter.js";
import Home from "./components/Home.js";
import Education from "./components/Education.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />

        <Education />
      </div>
    );
  }
}
//education
//work history
//projects
//skills
//about me //footer with details and contact
//sidebar
//scroll up buttom
export default App;
