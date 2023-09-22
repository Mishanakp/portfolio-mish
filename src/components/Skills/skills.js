import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
       <span className="skillTitle">What I do</span>
       <span className="skillDesc">I am a skilled and web developer with experience in creating visually appealing and user friendly website. I have a strong understanding od developing and keen eye for detail. I am Profient in HTML,CSS and Javascript as well as developing frame works such as React.js and Redux Toolkit</span>
       <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                <div className="skillBarText">
                   <h2>UI/UX Design</h2>
                   <p>This demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>this is demo content</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is demo content</p>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Skills