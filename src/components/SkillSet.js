import './SkillSet.css'
import React from 'react'
import javascriptLogo from '../assets/skills/javascriptLogo.png'
import reactLogo from '../assets/skills/reactLogo.png'
import nodeJSLogo from '../assets/skills/nodeJS.png'
import sqlLogo from '../assets/skills/sqlLogo.png'
import gitLogo from '../assets/skills/git.png'
import jestLogo from '../assets/skills/jestLogo.png'
import htmlLogo from '../assets/skills/html.png'
import cssLogo from '../assets/skills/css.png'
import pythonLogo from '../assets/skills/pythonLogo.png'





function SkillSet() {
  return (
    <div id="div-skill-set">
      <h2 id="h2-skill-set">Skill Set</h2>
      <div id="div-multiple-skills">
        <div className="div-individual-skill">
          <h4 className="h4-skill-name">JavaScript</h4>
          <img src={javascriptLogo} alt="JavaScript logo" className="img-skill" />
        </div>
        <div className="div-individual-skill">
        <h4 className="h4-skill-name">React</h4>
        <img src={reactLogo} alt="React logo" className="img-skill" />
        </div>
        <div className="div-individual-skill">
        <h4 className="h4-skill-name">NodeJS</h4>
        <img src={nodeJSLogo} alt="NodeJS logo" className="img-skill" />
        </div>
        <div className="div-individual-skill">
        <h4 className="h4-skill-name">SQL</h4>
        <img src={sqlLogo} alt="SQL logo" className="img-skill" />
        </div>
        <div className="div-individual-skill">
        <h4 className="h4-skill-name">Git</h4>
        <img src={gitLogo} alt="Git logo" className="img-skill" />
        </div>
        <div className="div-individual-skill">
        <h4 className="h4-skill-name">Jest</h4>
        <img src={jestLogo} alt="Jest logo" className="img-skill" />
        </div>
        <div className="div-individual-skill">
        <h4 className="h4-skill-name">HTML</h4>
        <img src={htmlLogo} alt="HTML logo" className="img-skill" />
        </div>
        <div className="div-individual-skill">
        <h4 className="h4-skill-name">CSS</h4>
        <img src={cssLogo} alt="CSS logo" className="img-skill" />
        </div>
        <div className="div-individual-skill">
        <h4 className="h4-skill-name">Python</h4>
        <img src={pythonLogo} alt="Python-logo" className="img-skill" />
        </div>
      </div>
    </div>
  )
}

export default SkillSet
