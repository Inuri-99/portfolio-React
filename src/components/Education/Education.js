import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Memberships<span>July(2022)-Present</span></h2>
                                                    <p>Membership of <b><i><a href='http://ieee.sjp.ac.lk/'>IEEE</a></i></b>- 2022 to Present</p>
                                                    <p>Membership of <b><i><a href='https://www.facebook.com/leoclub.usjp/'>Japura C2 LEO Group</a></i></b>- 2020 to Present</p>
                                                    <p>Membership of <b><i><a href='https://www.facebook.com/JapuraVoice/'>J'pura Voice</a></i></b>- 2022 to Present</p>

                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Undergraduation at Sri Jayewardenepura University <span>2020 to Present</span></h2>
                                                    <p>I'm working toward my udergratuate degree in BSc.(Hons) ICT Degree (FHSS) from <a href='http://fhss.sjp.ac.lk/ict/'><b>Department of Information and Communication Technology</b></a>.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Higher Education<span>2016-2018</span></h2>
                                                    <p>I have completed my G.C.E Advanced Level Examination from <b>Kalutara Balika Vidyalaya</b> with major 3 subjects. </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >ESOFT Metro Campus</h2>
                                                    <p>Completed four month <b>Certificate and Diploma in ICT(DiTech)</b> at ESOFT Metro Campus- 2015.</p>
                                                    <p>Completed four month <b>Certificate and Diploma in English(DiE)</b> at ESOFT Metro Campus- 2015.</p>
                                                    <p>Completed four month <b>Certificate and Diploma in Software Engineering(DiSE)</b> at ESOFT Metro Campus-2019.</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;
