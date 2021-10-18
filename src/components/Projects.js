import "./Projects.css";

import React from "react";
import github from "../assets/github-icon-black.png";
import toyWorkxs from "../assets/toy-workxs-icon.png"


function Projects() {
  return (
    <div id="div-projects">
      <h2 id="h2-projects-title">Projects</h2>
      <div id="div-multiple-projects">
        <div className="div-individual-projects">
          <h3 className="h3-project-title">Toy Workxs</h3>
          <h4 className="h4-project-overview">Overview:</h4>
          <p className="p-project-overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            officiis hic adipisci incidunt esse voluptates dolor reprehenderit
            at, voluptatum numquam aperiam eos facilis rem nisi id eum, mollitia
            labore modi?
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
            <img src={github} alt="" className="img-project-tech" />
            <img src={github} alt="" className="img-project-tech" />
            <img src={github} alt="" className="img-project-tech" />
          </div>
        </div>
        <div className="div-individual-projects">
          <h3 className="h3-project-title">Pixel Project</h3>
          <h4 className="h4-project-overview">Overview:</h4>
          <p className="p-project-overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            officiis hic adipisci incidunt esse voluptates dolor reprehenderit
            at, voluptatum numquam aperiam eos facilis rem nisi id eum, mollitia
            labore modi?
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
            <img src={github} alt="" className="img-project-tech" />
            <img src={github} alt="" className="img-project-tech" />
            <img src={github} alt="" className="img-project-tech" />
          </div>
        </div>
        <div className="div-individual-projects">
          <h3 className="h3-project-title">Fitness App</h3>
          <h4 className="h4-project-overview">Overview:</h4>
          <p className="p-project-overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            officiis hic adipisci incidunt esse voluptates dolor reprehenderit
            at, voluptatum numquam aperiam eos facilis rem nisi id eum, mollitia
            labore modi?
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
            <a href="https://github.com/Jayden-Banks/pixelProject" target="_blank" rel="noreferrer">Github Fitness App</a>
          </div>
          <h4 className="h4-project-overview">Tech:</h4>
          <div className="div-project-tech">
            <img src={github} alt="" className="img-project-tech" />
            <img src={github} alt="" className="img-project-tech" />
            <img src={github} alt="" className="img-project-tech" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
