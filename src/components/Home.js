import React, { Component } from "react";
import "../typewriter.js";
// import Background from "../images/showcase.gif";

class Home extends Component {
  render() {
    let img = require("../images/showcase.gif");

    // styles is an object
    const styles = {
      // mainImage is a key inside styles
      mainImage: {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundImage: `url(${img})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minWidth: "100%",
        minheight: "100%"
      }
      // multiple styles
      // textCSS: {
      //   position: "absolute",
      //   bottom: 70,
      //   left: 20,
      //   fontSize: 65,
      //   color: "white"
      // },
      // textCSS2: {
      //   position: "absolute",
      //   bottom: 15,
      //   left: 20,
      //   fontSize: 50,
      //   color: "white"
      // }
    };

    return (
      <div style={styles.mainImage}>
        <div style={{ position: "absolute", bottom: "0" }}>
          <h1>Noori Intikhab</h1>
          <h1>Front-End Developer</h1>
        </div>
      </div>
    );
  }
}

export default Home;
