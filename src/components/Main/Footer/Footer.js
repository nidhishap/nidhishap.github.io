import React, { Component } from "react";
import styles from "./footer.module.scss";

class Footer extends Component {
  render() {
    return (
      <div className={styles.Footer + " page-footer Footer"}>
        <div className="container">
          <div className="row">
            <div className={styles.aboutMe + " col l6 s12"}>
              <h5>Want to know how this page was made?</h5>
              <p>
                Checkout the Github repository. Make sure you have the dev
                branch selected.
              </p>
              <a
                href="https://github.com/nidhishap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="material-icons">call_made</i>
                <br />
                Github
              </a>
            </div>
            <div className={styles.connect + " col l4 offset-l2 s12"}>
              <h5>Connect</h5>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/nidhi_prakash_7/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://auth.geeksforgeeks.org/user/nish777/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codeforces
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nidhi-prakash-6a0129215/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/nidhi_prakash_7/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright + " footer-copyright"}>
          <div className="container center-align">
            &copy; 2021 | Nidhi Prakash | nish777
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
