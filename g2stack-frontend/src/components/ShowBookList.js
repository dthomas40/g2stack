import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import BookCard from "./BookCard";
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
      <div className="container">
        <h2 className="lead">Search</h2>
        <br />
        <Search />
        <br />

        <h1 className="lead">Browse</h1>
        <br />

        <div class="list-wrap">{bookList}</div>
        <br />
      </div>
    );
  }
}

export default ShowBookList;
