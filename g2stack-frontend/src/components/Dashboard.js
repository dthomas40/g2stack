import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

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
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Dashboard</h2>
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
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
