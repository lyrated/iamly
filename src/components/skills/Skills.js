import React from "react";
import "./skills.css";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="row justify-content-center no-gutters">
          <h2 className="col-12">My skills</h2>
          <div className="col-12">
            <p>I enjoy working on both frontend and backend.
            I can create responsive web apps that consider usability from a variety of users.
            While my main interest is JavaScript, I am also experienced in Java and PHP for software development. <a href="#projects">Read about my past work →</a></p>
          </div>
          <div className="col-md-6 pr-md-3 py-3">
            <div className="skill">
              Frontend
              <div className="progress">
                <div className="progress-bar bg-pink w-80" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="skill">
              HTML
              <div className="progress">
                <div className="progress-bar bg-lightpink w-90" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="skill">
              CSS
              <div className="progress">
                <div className="progress-bar bg-lightpink w-80" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="skill">
              JavaScript
              <div className="progress">
                <div className="progress-bar bg-lightpink w-70" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="skill">
              React
              <div className="progress">
                <div className="progress-bar bg-lightpink w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 pl-md-3 py-3">
            <div className="skill">
              Backend
              <div className="progress">
                <div className="progress-bar bg-purple w-70" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="skill">
              Java
              <div className="progress">
                <div className="progress-bar bg-lightgray w-80" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="skill">
              PHP
              <div className="progress">
                <div className="progress-bar bg-lightgray w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="skill">
              MongoDB
              <div className="progress">
                <div className="progress-bar bg-lightgray w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="skill">
              MySQL
              <div className="progress">
                <div className="progress-bar bg-lightgray w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <p>Further libraries and technologies: Git, Node.js, Express.js, Bootstrap, D3.js, jQuery, Drupal 8</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;