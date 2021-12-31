import React from "react";
import "./home.css";

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="row justify-content-center no-gutters">
          <h2 className="col-12">Hello, I am <span className="text-pink">Ly</span>.</h2>
          <p>I write code and stuff. <a href="#about">Get to know me →</a></p>
        </div>
      </div>
    </section>
  );
}

export default Home;