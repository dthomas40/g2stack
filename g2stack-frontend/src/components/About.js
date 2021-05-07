import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "./Navbar"
import '../App.css';

function About() {
    return (
<div className="About">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">G2 STACK</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-dark float-right">
                + Add New Stack Post
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <Navbar />
          <br />

          <div class="container-fluid bg-dark blockquote">
              <code> <br />
                Hey noob ... cough ... cough ... I mean game devs. <br /><br />

                Welcome to G2 STACK! <br /><br />

                Here we have an easy access database full of C# Scripts for 
                Unity game development. Just copy and paste them straight into 
                your own scripts. Simply use our search function on our home 
                page to start your G2 journey. <br /><br />

                Well what are you waiting for, start exploring! <br /><br />
              </code>
            </div>
        </div>
      </div>
    )
}

export default About
