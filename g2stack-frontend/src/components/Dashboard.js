import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../App.css";
import DashboardSearch from "./DashboardSearch";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, signout } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    setError("");

    try {
      await signout();
      history.push("/sign-in");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div className="container">
      <h2 className="lead">Dashboard</h2>
      <br />
      <div className="about-content">
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Username:</strong> {currentUser.displayName}
        <br />
        <br />
        <strong>Email:</strong> {currentUser.email}
        <br />
        <br />
        <Link to="/create-book">+ Add Script</Link>
        <br />
        <br />
        <DashboardSearch />
        <br />
        <br />
        <Link to="/update-profile" className="btn btn-primary w-100 met-3">
          Update Profile
        </Link>
        <br />
        <br />
        <Button className="btn btn-danger w-100 met-3" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
      <br />
    </div>
  );
}

export default Dashboard;
