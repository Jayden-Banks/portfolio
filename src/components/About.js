import React from 'react'
import linkedin from '../assets/linkedin-icon-black.png'
import github from '../assets/github-icon-black.png'
import './About.css'
import self from '../assets/self.jpg'

// npm run deploy 
function About() {
  return (
    <div id="div-about">
      <div id="div-about-picture">
        <div id="div-picture" style= {{backgroundImage: `URL(${self})`}}>
          <div id="div-picture-title" >Jayden Banks <br /> Web Developer</div>
        </div>
      </div>
      <div id="div-about-bio">
        <div id="div-bio">
          <h2 id="h2-about">About Me</h2>
          <br />
          <h3 id="h3-about">I am A Passionate Web Developer</h3>
          <br />
          <p id="p-about">
          How often is someone's work actually their passion? I truly enjoy programming and web development. 
          Whether it's React, HTML, CSS, JavaScript or Python, I am always sharpening and expanding my skill set and take immense pride in my work and dedication. 
          Clean, efficent and organized coding structures are always my priorities. <br />
          In my free time, I enjoy learning new coding skills, technologies and languages as well as game making, weight-lifting, drawing and playing sports.
          </p>
          <div id="div-about-links">
          <a href="https://www.linkedin.com/in/jayden-banks" target="_blank" rel="noreferrer"><input type="image" className="input-link-header input-about-link" src={linkedin} alt="linkedin icon"/></a>
          <a href="https://github.com/Jayden-Banks?tab=repositories" target="_blank" rel="noreferrer"><input type="image" className="input-link-header input-about-link" src={github} alt="linkedin icon"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
