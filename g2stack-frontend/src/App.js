import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";
import About from "./components/About";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <div className="Base">
              <div className="">
                <br />
                <h2 className="lead text-center">G2 STACK</h2>
              </div>
              <div className="container text-right">
                <Link to="/sign-in">Sign In</Link> /{" "}
                <Link to="/sign-up">Sign Up</Link>
              </div>
              <hr />
              <Navbar />
              <br />
              <Route exact path="/" component={ShowBookList} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/sign-in" component={SignIn} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/create-book" component={CreateBook} />
              <PrivateRoute path="/edit-book/:id" component={UpdateBookInfo} />
              <Route path="/show-book/:id" component={ShowBookDetails} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
