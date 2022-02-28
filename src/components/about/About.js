import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>INURI GUNATHILAKA</b> and I am an Bsc. ICT undergratuate student at the faculty of Humanities and Social Sciences,<a target="_blank" href="https://www.sjp.ac.lk/"><b>University of Sri Jayewardenepura.</b></a>.I am very puctual and like to do my all works throughout the day at night time and I am a young enthusiastic individual who always seeks for the opportunity.Therefore I have the ultimate intention of counting doing my stuff well.I really like to meet and work with different people.I am much interested in developing new things which excite me a lot. :)  </p>
                        <p className={classes.br}>But I also have a lot of other interests that I like spend my free time on.Sometimes I do nothing , watch movies and TV Series as well.I really try to take time off and get my mind off and chill.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;