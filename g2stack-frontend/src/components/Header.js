import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../App.css";

function Header() {
  const { currentUser } = useAuth();

  return (
    <div className="container text-right">
      {currentUser ? (
        <div className="lead auth-corner">
          Logged in as {"{ "}
          <Link to="/dashboard">{currentUser.displayName}</Link>
          {" }"}
        </div>
      ) : (
        <div className="lead auth-corner">
          <Link to="/sign-in">Sign In</Link> /{" "}
          <Link to="/sign-up">Sign Up</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
