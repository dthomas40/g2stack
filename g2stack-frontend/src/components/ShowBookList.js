import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import Navbar from "./Navbar";
import Search from "./Search";

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('https://g2stack.herokuapp.com/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">G2 STACK</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-dark float-right">
                + Add New Stack Post
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <Navbar />
          <br />

          <Search />
          <br />

          <div className="list">
                {bookList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;