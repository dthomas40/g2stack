import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <Route exact path="/" component={ShowBookList} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/create-book" component={CreateBook} />
            <PrivateRoute path="/edit-book/:id" component={UpdateBookInfo} />
            <Route path="/show-book/:id" component={ShowBookDetails} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
