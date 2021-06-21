import React, { Component } from "react";
import styles from "./achievements.module.scss";

class Achievements extends Component {
  render() {
    return (
      <div className={styles.main}>
        <p>
          <strong>Indian Institute of Technology Bombay</strong>
          <br /> TechFest Regionals, Winner (2019)
        </p>
        <p>
          <strong>BMS College of Engineering</strong>
          <br /> Clash of Codes, Winner (2021)
        </p>
        <p>
          <strong ><a href="https://nidhishap.github.io/Faire/index.html">Faire</a></strong>
          <br /> The application helps to schedule your tasks and manage them efficiently and keeps track of your progress.
          <br />
        </p>
        <p>
          <strong><a href="https://github.com/nidhishap/npclassroom">Kaksha</a></strong>
          <br />Application which helps students and teachers to interact efficiently in a 'kaksha' and add important files and documents needed in the class.
        </p>
        <p>
          <strong><a href="https://github.com/nidhishap/College-Management">College Management System</a> </strong>
          <br />An extensive college portal which gives students as well as teachers ability to view and edit their details along with features to view examination results , issue library books as well as pay fees .  
          <br />Features used - Java, Swing, MySQL, IDE Used - NetBeans
        </p>
        <p>
          <strong><a href="https://github.com/nidhishap/Emojify">Emojify</a> </strong>
          <br />Machine learning project where user's real time video is used to detect facial expressions , classifies them and then converts it to an appropriate emoji using 
      </p></div>
    );
  }
}

export default Achievements;
