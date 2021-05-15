import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../App.css";

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
    <div>
      <Container
        className="d-flex justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <Card className="auth-containers">
            <Card.Body>
              <h2 className="text-center lead">Dashboard</h2>
              <br />
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <br />
              <br />
              <Link to="/create-book">+ Add Script</Link>
              <br />
              <br />
              <div></div>
              <Link
                to="/update-profile"
                className="btn btn-primary w-100 met-3"
              >
                Update Profile
              </Link>
              <br />
              <br />
              <Button
                className="btn btn-danger w-100 met-3"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2"></div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
