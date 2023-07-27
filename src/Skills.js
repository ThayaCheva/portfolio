import React from 'react'
import './styling/skills.css'
export default function Skills(props) {
    return (
        <section id="skills" onMouseMoveCapture={props.hoverFunction}>
            <div className="skills-container">
                <div className="header">
                    <h1>MY SKILLS</h1>
                </div>
                <h2>Langauges:</h2>
                <div className="skills-list">
                    <div className="skills-item">PYTHON</div>
                    <div className="skills-item">JAVA</div>
                    <div className="skills-item">JAVASCRIPT</div>
                    <div className="skills-item">C</div>
                    <div className="skills-item">C#</div>
                    <div className="skills-item">MYSQL</div>
                </div>
                <h2>Web Dev:</h2>
                <div className="skills-list skills-2">
                    <div className="skills-item">HTML</div>
                    <div className="skills-item">CSS</div>
                    <div className="skills-item">REACT</div>
                    <div className="skills-item">SASS</div>
                </div>
            </div>
            <img className="line-black" src={require("./images/circle-line-black.png")} alt="line-black"></img>
            <img className="line-white" src={require("./images/circle-line-white.png")} alt="line-white"></img>
        </section>
    )
}