import React from "react";
import "./about.css";
import me from "./me.jpg";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row justify-content-center no-gutters">
          <h2 className="col-12">About me</h2>
          <div className="col-12 col-md-8">
            <p>
              My name is Mai-Ly Nguyen, but everyone simply calls me <strong>Ly</strong>.
              I have a B.Sc. in Computer Science and Media. I am located in <strong>Berlin, Germany</strong>.
            </p>
            <p>
              I love new challenges and variety. I constantly want to expand my knowledge and learn new techonologies and techniques.
              I am a fast learner with a wide range of experiences. <a href="#skills">Learn about my technical skills →</a>
            </p>
            <p>
              As a woman of color, I value diversity in the workplace and advocate for gender and racial equity in particular.
            </p>
            <p>If you want to know more, <a href="#contact">contact me →</a></p>
          </div>
          <div className="col-8 col-md-4 pl-md-5">
            <img src={me} alt="myself" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;