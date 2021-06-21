import React, { Component } from "react";
import styles from "./header.module.scss";

class Header extends Component {
  render() {
    return (
      <div id="header" className={styles.Header + " Header"}>
        <div>
          <div className={styles.displayPicture}></div>
          <h2>Nidhi Prakash</h2>
          <h6>Department of Information Science and Engineering</h6>
          <h5>BMS College of Engineering (2019 - 2023)</h5>
          <div className={styles.downwardArrow}>
            <a href="/#second-banner">
              <i className="material-icons">expand_more</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
