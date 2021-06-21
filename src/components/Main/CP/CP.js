import React, { Component } from "react";
import styles from "./cp.module.scss";
import Astronaut from "./Astronaut";
import Achievements from "./Achievements";

class CP extends Component {
  render() {
    return (
      <div id="second-banner" className={styles.CP + " CP"}>
        <br />
        <br />
        <div className="container">
          <div className={styles.introduction + " row"}>
            <div className="col s12 l6">
              <div className={styles.introductionLeft}>
                <div>
                  <h3>Hi, I'm Nidhi!</h3>
                  <p>
                    I am a sophomore at <strong>BMS College of Engineering</strong>,{" "}
                    majoring in Information Science and Engineering (expected 2023)
                    . I also worked on a project in {" "}
                    <strong>Samsung</strong> as an intern.
                  </p>
                  <p>
                    I like <strong>Programming</strong> and have
                    spent most of my time in college on learning new things .
                    I also like <strong>Web Development</strong>,{" "}
                    <strong> Operating Systems</strong> and <strong>Databases</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 l6 hide-on-med-and-down">
              <Astronaut />
            </div>
          </div>
        </div>

        <div className={styles.parallax}></div>

        <div id="cp-main" className="container">
          <br />
          <br />
          <div className="row">
            <div className={styles.cpHeader + " col s12"}>
              <h2>Competitive Programming</h2>
            </div>
          </div>
          <div className="row">
            <div className={styles.cpIntroduction + " col s12 l6"}>
              <p>
                I started with competitive programming in 2019 and I am an enthusiastic coder.
              </p>
              <br />
              <h5><a href= "https://github.com/nidhishap/npclassroom">Kaksha</a></h5><br />
                An interactive learning platform for educational purpose.
              
              <div className={styles.icpc}>
                <img
                  src={require("../../../img/kaksha.jpeg")}
                  alt=""
                  className="responsive-img materialboxed"
                ></img>
              </div>
            </div>
            <div className={styles.contests + " col s12 l6"}>
              <Achievements />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default CP;
