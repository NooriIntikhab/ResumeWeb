import React, { Component } from "react";

class Education extends Component {
  render() {
    let img = require("../images/edu.jpg");
    const styles = {
      mainEduImage: {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundImage: `url(${img})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minWidth: "100%",
        minheight: "100%"
      },
      textCSS: {
        position: "absolute",
        left: 10,
        fontSize: 75,
        color: "black"
      }
    };
    return (
      <div>
        <div style={styles.mainEduImage}>
          <h1 style={styles.textCSS}>Education</h1>
        </div>
      </div>
    );
  }
}
export default Education;
