import React from "react";
import "./projects.css";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";
import project4 from "./project4.png";
import project5 from "./project5.png";
import project6 from "./project6.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row justify-content-center no-gutters">
          <h2 className="col-12">Projects &amp; Experience</h2>
          <div className="project row">
            <div className="col-12 col-md-6">
              <img src={project6} alt="Bar Chart on AGPOV" className="odd"/>
              <p><a href="https://agpov.herokuapp.com/" target="_blank" rel="noreferrer">AGPoV on heroku ↗</a></p>
            </div>
            <div className="col-12 col-md-6">
              <h3>A Gendered Point of View (09/2021)</h3>
              <p className="text-gray">Tech Stack: Node.js, Express.js, React.js, MongoDB, REST, D3.js</p>
              <p>Bachelor thesis project: Web app showing three data visualizations to analyze the gender distribution in the movie industry.</p>
              <p><a href="https://github.com/lyrated/agpov_backend" target="_blank" rel="noreferrer">Github ↗</a></p>
            </div>
          </div>

          <div className="project row">
            <div className="col-12 col-md-6">
              <img src={project5} alt="Homepage of Green Pick" className="even" />
              <p><a href="https://wtat1-group-03.herokuapp.com/" target="_blank" rel="noreferrer">Green Pick on heroku ↗</a></p>
            </div>
            <div className="col-12 col-md-6 order-md-first">
              <h3>Green Pick (08/2021)</h3>
              <p className="text-gray">Tech Stack: Node.js, Express.js, EJS, AJAX, MongoDB, REST, Vue.js</p>
              <p>University project with 3 other classmates.
                This web app suggests sustainable alternatives for different services. The project is unfinished and only for learning purposes.
              </p>
              <p><a href="https://github.com/kimc0de/GreenPick" target="_blank" rel="noreferrer">Github ↗</a></p>
            </div>
          </div>

          <div className="project row">
            <div className="col-12 col-md-6">
              <img src={project4} alt="Homepage of ReMatch" className="odd" />
              <p><a href="https://rematch-htw.herokuapp.com/" target="_blank" rel="noreferrer">ReMatch on heroku ↗</a></p>
            </div>
            <div className="col-12 col-md-6">
              <h3>ReMatch (02/2021)</h3>
              <p className="text-gray">Tech Stack: Node.js, Express.js, EJS, MongoDB, REST, Elasticsearch</p>
              <p>University project with 6 other classmates.
                This web app matches recruiters and employees according to the data they entered.
                I worked on the matching algorithm, e-mail notification system, and sign up questionnaire.
                My classmates trusted me to help them with backend bug fixes.</p>
              <p><a href="https://github.com/B5-Recruiter-and-Employee/B5_Project" target="_blank" rel="noreferrer">Github ↗</a></p>
            </div>
          </div>

          <div className="project row">
            <div className="col-12 col-md-6">
              <img src={project3} alt="Left: Start display of StudyPlanner with sample topics / Right: Edit Topic display of StudyPlanner" className="even" />
            </div>
            <div className="col-12 col-md-6 order-md-first">
              <h3>StudyPlanner (01/2021)</h3>
              <p className="text-gray">Tech Stack: Android (Java), ASAP library</p>
              <p>Project for the university class "Basics of mobile applications".
                A simple Android program to make and edit a study plan and displaying it in a list sorted by time.
                Also works with Bluetooth via the ASAP library from Prof. Dr. Schwotzer: Send and receive study topics from another device.
              </p>
              <p><a href="https://github.com/lyrated/StudyPlanner" target="_blank" rel="noreferrer">Github ↗</a></p>
            </div>
          </div>

          <div className="project row">
            <div className="col-12 col-md-6">
              <img src={project2} alt="Light theme of Lunation" className="odd" />
              <p><a href="http://lunation.glitch.me" target="_blank" rel="noreferrer">Lunation on glitch ↗</a></p>
            </div>
            <div className="col-12 col-md-6">
              <h3>Lunation (05/2020)</h3>
              <p className="text-gray">Tech Stack: HTML, CSS, JavaScript, jQuery</p>
              <p>Private project: Simple static one page web app of a calendar with inaccurate moon phases.
                Just for fun. With three different color schemes to choose from (choice is saved in browser).
              </p>
              <p><a href="https://github.com/lyrated/lunation" target="_blank" rel="noreferrer">Github ↗</a></p>
            </div>
          </div>

          <div className="project row">
            <div className="col-12 col-md-6">
              <img src={project1} alt="My version of the user listing on Beziehungszentrum.de" className="even" />
              <p><a href="https://beziehungszentrum.de" target="_blank" rel="noreferrer">beziehungszentrum.de ↗</a></p>
            </div>
            <div className="col-12 col-md-6 order-md-first">
              <h3>Beziehungszentrum (08/2020)</h3>
              <p className="text-gray">Tech Stack: PHP, Drupal 8, Symfony, HTML, CSS, JavaScript, jQuery</p>
              <p>During my web development internship in summer 2020, I worked on the website beziehungszentrum.de.
                I was responsible for new features like user profiles, a simplified messaging system including e-mail replies, and user listings with custom filters.</p>
              <p>I was able to convince especially through my independent work and attention to detail.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;