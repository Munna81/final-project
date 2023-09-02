import React from 'react'
import './skills.css'
import uiDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import appDesign from '../../assets/app-design.png'
const Skills = () => {
  return (
    <section id="skills">
      <span className="skilltitle">What I do</span>
      <span className="Desc">
        I am skilled Web designer with experiance creating visulally appeling
        and user friendly Website
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={uiDesign} alt="UI/ULX" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UiDesign</h2>
            <p>This is a demo for project</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>WebDesign</h2>
            <p>I am Passionate about for this project</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appDesign} alt="appDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>AppDesign</h2>
            <p>This kind of app is really need for daily basis program</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills
