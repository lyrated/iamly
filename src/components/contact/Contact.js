import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="my-5">
          <p>Write me a letter:</p>
          <p className="mb-5"><a href="mailto:hello@iamly.de" className="big">hello@iamly.de</a></p>
          <p>Find me on: <a href="https://github.com/lyrated" target="_blank" rel="noreferrer">Github</a> | <a href="https://www.linkedin.com/in/mai-ly-nguyen-43863a199/" target="_blank" rel="noreferrer">Linkedin</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;