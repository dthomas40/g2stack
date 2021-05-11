import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";

function About() {
  return (
    <div className="About">
      <br />
      <h2 className="lead text-center">G2 STACK</h2>
      <hr />

      <Navbar />
      <br />
      <div className="container">
        <div class="about-content">
          <div>
            {" "}
            <br />
            Hey noob ... cough ... cough ... I mean game devs. <br />
            <br />
            Welcome to G2 STACK! <br />
            <br />
            Here we have an easy access database full of C# Scripts for Unity
            game development. Just copy and paste them straight into your own
            scripts. Simply use our search function on our home page to start
            your G2 journey. <br />
            <br />
            Well what are you waiting for, start exploring! <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
