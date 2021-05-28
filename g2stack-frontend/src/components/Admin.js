import React from "react";
import { Component } from "react";
import axios from "axios";
import QueryCard from "./QueryCard";

export default class Admin extends Component {
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
        console.log("Error from Admin Post Search");
      });
  }

  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList, qBooks;

    qBooks = this.state.books.filter((book, k) => {
      return book.title
        .toLocaleLowerCase()
        .match(this.state.value.toLocaleLowerCase());
    });

    if (!qBooks) {
      bookList = "there is no book record!";
    } else {
      bookList = qBooks.map((book, k) => <QueryCard book={book} key={k} />);
    }

    return (
      <div className="container">
        <h1 className="lead">Welcome Administrator.</h1>
        <div>
          <h1 className="lead">Users</h1>
        </div>
        <div>
          <h1 className="lead">Posts</h1>
          <div class="search-section">
            <div className="search-bar">
              <input
                type="text"
                value={this.state.value}
                id="search-input"
                placeholder="What are you looking for ?"
                onChange={this.handleChange}
              />
            </div>
            <div class="results">
              {bookList.map((book, k) => {
                return <div>{book}</div>;
              })}
            </div>
          </div>
        </div>
        <div>
          <h1 className="lead">Comments</h1>
        </div>
      </div>
    );
  }
}
