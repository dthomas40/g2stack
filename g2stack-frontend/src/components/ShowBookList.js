import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import Navbar from "./Navbar";
import Search from "./Search";

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://g2stack.herokuapp.com/api/books")
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }

  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if (!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) => <BookCard book={book} key={k} />);
    }

    return (
      <div className="ShowBookList">
        <div className="">
          <br />
          <h2 className="lead text-center">G2 STACK</h2>
        </div>

        <div className="">
          {/* <img class="logo-size float-left" src="G2.png" /> */}
          <hr />
        </div>

        <Navbar />
        <br />
        <div className="container">
          {/* <marquee behavior="scroll">
            Search your queries here and see the script cards update...
          </marquee> */}

          <h2 className="lead">Search</h2>
          <br />
          <Search />
          <br />

          <h1 className="lead">Browse</h1>
          <br />

          <div class="list-wrap">{bookList}</div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;
