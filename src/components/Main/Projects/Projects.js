import React, { Component } from "react";
import styles from "./projects.module.scss";

class Projects extends Component {
    render() {
        return (
            <div className={styles.Projects + " Projects"}>
                <div id="projects-main" className="container">
                    <br />
                    <br />
                    <div className="row">
                        <div className={styles.projectsHeader + " col s12"}>
                            <h2>Projects</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 l5">
                            <div className={styles.card + " card"}>
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img
                                        className="activator"
                                        src={require("../../../img/project1.jpeg")}
                                        alt=""
                                    />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator">
                                        Faire
                                        <i className="material-icons right">
                                            arrow_drop_up
                                        </i>
                                    </span>
                                    <p>
                                        An important day to day need - Todo List
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a
                                        href="https://nidhishap.github.io/Faire/index.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id={styles.link}
                                    >
                                        Link
                                    </a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title">
                                        Faire
                                        <i className="material-icons right">
                                            close
                                        </i>
                                    </span>
                                    <p>
                                        An essential in day to day need.<br />
                                        Written in HTML, JS using bootstrap and jquery.
                                        <br />
                            
                                    </p>
                                    <p>
                                        Supports classification of tasks as per the need.
                                        <br />
                                        </p>
                                        <p>The user can add their forthcoming tasks, subtasks and their details on a given date and cross them
                                        out after they are done. An about section to give a brief information about the application to the 
                                        user. Once the task is completed you can mark it as done.<br />
                                        </p>
                                        <p> The completed tasks are visible with a strikethrough format and with decreased opacity 
                                            showing the user that they are completed. There is also an option to clear all the completed tasks 
                                            from the to-do list accompanied by a button to
                                            remove all the tasks from the currently existing list. <br /></p>
                                            <p>A toggle bar is available which enables us to use few selected features of the
                                            application when we need them. There is also a navigation bar to help us navigate through the site at our convenience. A FAQ section has
                                            been provided to answer the most frequent queries asked by the users.

                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                        <div className="col s12 l5 offset-l2">
                            <div className={styles.card + " card"}>
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img
                                        className="activator"
                                        src={require("../../../img/project2.jpg")}
                                        alt=""
                                    />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator ">
                                        Machine Learning Emojify
                                        <i className="material-icons right">
                                            arrow_drop_up
                                        </i>
                                    </span>
                                    <p>
                                        Convolution neural networks implementation in python
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a
                                        href="https://github.com/nidhishap/Emojify"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id={styles.link}
                                    >
                                        Link
                                    </a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title">
                                        Emojify
                                        <i className="material-icons right">
                                            close
                                        </i>
                                    </span>
                                    <p>
                                        A machine learning application which detects ones's facial expressions and then gives appropriate emojis 
                                        for them !!!
                                        <br />
                                        Emojis used - 😡😐😊😔😱
                                    </p>
                                    <p>
                                        A model which is trained to classify facial expressions from a real-time video and shows if the person
                                         is - angry, nuetral, happy, sad or suprised. It then gives an emoji based on the facial expression's classification.
                                    </p>
                                    <p>
                                        
                                    </p>
                                    <p>Checkout the github repository.</p>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
