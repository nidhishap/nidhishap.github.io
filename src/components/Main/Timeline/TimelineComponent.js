import React, { Component } from 'react';
import styles from './timelinecomponent.module.scss';

class Timeline extends Component {
    render() {
        return (
            <div className={styles.TimelineComponent}>
                <div className={styles.container}>
                    <ul>
                        <li>
                            <div>
                                <span></span>
                                <div className={styles.title}>Samsung</div>
                                <div className={styles.info}>
                                    Project Engineering Intern
                                </div>
                                <div className={styles.type}>December - March</div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2020-2021</span>
                            </span>
                        </li>
                        <li>
                            <div>
                                <span></span>
                                <div className={styles.title}>
                                    BMS College of Engineering
                                </div>
                                <div className={styles.info}>
                                    Information Science and Engineering
                                </div>
                                <div className={styles.type}>
                                    2019 - Present
                                </div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2019</span>
                            </span>
                        </li>
                        <li>
                            <div>
                                <span></span>
                                <div className={styles.title}>JEE Advanced , Qualified( Top 2 percentile in India)</div>
                                <div className={styles.info}>
                                    Comed K
                                </div>
                                <div className={styles.type}>844</div>
                                <br />
                                <div className={styles.title}>WBJEE</div>
                                <div className={styles.info}>Rank</div>
                                <div className={styles.type}>756</div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2019</span>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <div>
                                <div className={styles.title}>
                                Sushila Birla Girls' School
                                </div>
                                <div className={styles.info}>CBSE Class 12</div>
                                <div className={styles.type}>82.8%</div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2018</span>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <div>
                                <div className={styles.title}>
                                Sushila Birla Girls' School
                                </div>
                                <div className={styles.info}>
                                Central Board of Secondary Examination Class 10
                                </div>
                                <div className={styles.type}>93.1%</div>
                            </div>{' '}
                            <span className={styles.number}>
                                <span>2016</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Timeline;
