import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import QueryCard from "./QueryCard";
import { auth } from "../firebase";

class DashboardSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    document.getElementById("search-input").scrollIntoView();
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
        console.log("Error from search");
      });
  }

  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList, qBooks;

    qBooks = this.state.books.filter((book, k) => {
      return book.UID.match(auth.currentUser.uid);
    });

    if (!qBooks) {
      bookList = "there is no book record!";
    } else {
      bookList = qBooks.map((book, k) => <QueryCard book={book} key={k} />);
    }

    return (
      <div class="search-section">
        <div class="results">
          {bookList.map((book, k) => {
            return <div>{book}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default DashboardSearch;
