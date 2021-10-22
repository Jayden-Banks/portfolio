import "./Projects.css";

import React from "react";
import github from "../assets/github-icon-black.png";
import toyWorkxs from "../assets/toy-workxs-icon.png"

import javascriptLogo from '../assets/skills/javascriptLogo.png'
import reactLogo from '../assets/skills/reactLogo.png'
import nodeJSLogo from '../assets/skills/nodeJS.png'
import sqlLogo from '../assets/skills/sqlLogo.png'
import gitLogo from '../assets/skills/git.png'
import jestLogo from '../assets/skills/jestLogo.png'
import htmlLogo from '../assets/skills/html.png'
import cssLogo from '../assets/skills/css.png'
import pythonLogo from '../assets/skills/pythonLogo.png'
import fitnessLogo from '../assets/fitnessLogo.png'

import YoutubeEmbed from "./YoutubeEmbed";
import SimpleImageSlider from "react-simple-image-slider";

import pb1 from '../assets/pixel_images/PB-1.png'
import pb2 from '../assets/pixel_images/PB-2.png'
import pb3 from '../assets/pixel_images/PB-3.png'
import pb4 from '../assets/pixel_images/PB-4.png'
import pb5 from '../assets/pixel_images/PB-5.png'
import pb6 from '../assets/pixel_images/PB-6.png'

import fa1 from '../assets/fitness_images/FA-1.png'



function Projects() {
  const screenshotsPixelProject = [
    { url: pb1 },
    { url: pb2 },
    { url: pb3 },
    { url: pb4 },
    { url: pb5 },
    { url: pb6 },
  ]
  const screenshotsFitnessApp = [
    { url: fa1 },
  ]
  return (
    <div id="div-projects">
      <h2 id="h2-projects-title">Projects</h2>
      <div id="div-multiple-projects">
        <div className="div-individual-projects">
          <h3 className="h3-project-title">Toy Workxs</h3>
          <h4 className="h4-project-overview">Overview:</h4>
          <p className="p-project-overview">
            A full stack react e-commerce toy store app. Uses a postgres database and hosted on heroku. This app tries to be as realistic as possible and allows users to
            create accounts, add/remove products in cart, checkout using stripe and then see their order history. The layout is entirely made from basic css and flex-box to show
            full understanding of the language.
          </p>
          <div className="div-project-github-link">
            <a href="https://capstone-jayden-banks.herokuapp.com/" target="_blank" rel="noreferrer">
            <input
              type="image"
              className="input-link-header  input-project-github"
              src={toyWorkxs}
              alt="linkedin icon"
            />
            </a>
            <a href="https://capstone-jayden-banks.herokuapp.com/" target="_blank" rel="noreferrer">Toy Workxs Website</a>
          </div>
            <div className="div-project-github-link">
            <a href="https://github.com/Jayden-Banks/Toy-Workxs-Capstone" target="_blank" rel="noreferrer">
            <input
              type="image"
              className="input-link-header input-about-link input-project-github"
              src={github}
              alt="linkedin icon"
            />
            </a>
            <a href="https://github.com/Jayden-Banks/Toy-Workxs-Capstone" target="_blank" rel="noreferrer">Github Toy Workxs</a>
            </div>
          <h4 className="h4-project-overview">Tech:</h4>
          <div className="div-project-tech">
            <img src={reactLogo} alt="react" className="img-project-tech" />
            <img src={javascriptLogo} alt="javascript" className="img-project-tech" />
            <img src={nodeJSLogo} alt="node js" className="img-project-tech" />
          </div>
          <YoutubeEmbed embedId="SR3KVR0EqZ8" />
      <div class="div-slider">

      <SimpleImageSlider
        width={330}
        height={260}
        images={screenshotsPixelProject}
        showBullets={true}
        showNavs={true}
        navStyle={2}
        />
        </div>
        </div>
        <div className="div-individual-projects">
          <h3 className="h3-project-title">Pixel Project</h3>
          <h4 className="h4-project-overview">Overview:</h4>
          <p className="p-project-overview">
            A full stack javascript game application that puts 2 fighters against each other. The app creates fighter objects with names, health, and other properties. Then as the user clicks or misclicks 
            circles that appear on the screen, health is taken away from the hero or enemy by updating the fighter objects. Express and Axios are used to make calls from the front to the back.
          </p>
          <div className="div-project-github-link">
            <a href="https://github.com/Jayden-Banks/pixelProject" target="_blank" rel="noreferrer">
            <input
              type="image"
              className="input-link-header  input-about-link input-project-github"
              src={github}
              alt="linkedin icon"
            />
            </a>
            <a href="https://github.com/Jayden-Banks/pixelProject" target="_blank" rel="noreferrer">Github Pixel Project</a>
          </div>
          <h4 className="h4-project-overview">Tech:</h4>
          <div className="div-project-tech">
            <img src={javascriptLogo} alt="javascript" className="img-project-tech" />
            <img src={htmlLogo} alt="html" className="img-project-tech" />
            <img src={cssLogo} alt="css" className="img-project-tech" />
          </div>
      <YoutubeEmbed embedId="04twgTk_4ow" />
      <div class="div-slider">

      <SimpleImageSlider
        width={330}
        height={260}
        images={screenshotsPixelProject}
        showBullets={true}
        showNavs={true}
        navStyle={2}
        />
        </div>
        </div>
        <div className="div-individual-projects">
          <h3 className="h3-project-title">Fitness App</h3>
          <h4 className="h4-project-overview">Overview:</h4>
          <p className="p-project-overview">
            A vanilla javascript full stack calorie counter app. This app connects to an external api for data on food and allows the user to search for food and add
            food that they have eaten to a list that then can be checked to see if it their total food calories are under their goal. The app uses axios and express to make the api calls and
            stores the info on the back end. 
          </p>
          <div className="div-project-github-link">
            <a href="https://fitness-app-jayden-banks.herokuapp.com/" target="_blank" rel="noreferrer">
            <input
              type="image"
              className="input-link-header input-about-link input-project-github"
              src={fitnessLogo}
              alt="linkedin icon"
            />
            </a>
            <a href="https://fitness-app-jayden-banks.herokuapp.com/" target="_blank" rel="noreferrer">Fitness App Website</a>
            </div>
          <div className="div-project-github-link">
            <a href="https://github.com/Jayden-Banks/fitness-app" target="_blank" rel="noreferrer">
            <input
              type="image"
              className="input-link-header  input-about-link input-project-github"
              src={github}
              alt="linkedin icon"
            />
            </a>
            <a href="https://github.com/Jayden-Banks/fitness-app" target="_blank" rel="noreferrer">Github Fitness App</a>
          </div>
          <h4 className="h4-project-overview">Tech:</h4>
          <div className="div-project-tech">
            <img src={javascriptLogo} alt="javascript" className="img-project-tech" />
            <img src={htmlLogo} alt="html" className="img-project-tech" />
            <img src={cssLogo} alt="css" className="img-project-tech" />
          </div>
          <div class="div-slider" id="id-slider-fitness">

      <SimpleImageSlider
        width={330}
        height={260}
        images={screenshotsFitnessApp}
        showBullets={true}
        showNavs={true}
        navStyle={2}
        />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
