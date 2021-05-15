import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../App.css";

function Header() {
  const { currentUser } = useAuth();

  return (
    <div>
      <br />
      <h2 className="lead text-center">G2 STACK</h2>
      <hr />
      {currentUser ? (
        <div className="container text-right">
          <Link to="/dashboard">{currentUser.email}</Link>
        </div>
      ) : (
        <div className="container text-right">
          <Link to="/sign-in">Sign In</Link> /{" "}
          <Link to="/sign-up">Sign Up</Link>
        </div>
      )}
      <br />
    </div>
  );
}

export default Header;
