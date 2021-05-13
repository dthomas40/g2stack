import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navigation-bar">
        <Link to="/" className="navigation-link navigation-button">
          Scripts
        </Link>
        <Link to="/dashboard" className="navigation-link navigation-button">
          Dashboard
        </Link>
        <Link to="/about" className="navigation-link navigation-button">
          About
        </Link>
      </nav>
    );
  }
}
