import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";
import About from "./components/About";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="Base">
          <Header />
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
      </Router>
    </AuthProvider>
  );
}

export default App;
