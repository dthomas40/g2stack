import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function AdminRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <div className="container">
            <h1 className="lead">
              You do not have admin privileges. Please sign in with admin
              account.
            </h1>
          </div>
        );
      }}
    ></Route>
  );
}

export default AdminRoute;
