import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://g2stack.herokuapp.com/api/books/" + this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          book: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }

  onDeleteClick(id) {
    axios
      .delete("https://g2stack.herokuapp.com/api/books/" + id)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  }

  selectText(node) {
    node = document.getElementById(node);

    if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(node);
      range.select();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      console.warn("Could not select text in node: Unsupported browser.");
    }

    document.execCommand("copy");
  }

  render() {
    const book = this.state.book;
    const clickable = document.querySelector(".click-me");
    if (clickable) {
      clickable.addEventListener("click", () => this.selectText("script-text"));
    }

    let BookItem = (
      <div>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Var</th>
              <th scope="col">Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Description</td>
              <td>{book.description}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Script</td>
              <td>
                <p clickable class="click-me">
                  Click here to copy script.
                </p>
                <br />
                <div id="script-text">{book.publisher}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-dark float-left">
                Return
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{book.title}</h1>
              <p className="lead text-center">{book.author}</p>
              <p className="text-center">{Date(book.published_date)}</p>
              <hr /> <br />
            </div>
          </div>
          <div>{BookItem}</div>

          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={this.onDeleteClick.bind(this, book._id)}
              >
                Delete Post
              </button>
              <br />
            </div>

            <div className="col-md-6">
              <Link
                to={`/edit-book/${book._id}`}
                className="btn btn-outline-info btn-lg btn-block"
              >
                Edit Post
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default showBookDetails;
