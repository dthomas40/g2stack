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

  clearSelection() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      document.selection.empty();
    }
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
    this.clearSelection();
    alert("The script has been copied to clipboard.");
  }

  render() {
    const book = this.state.book;
    const clickable = document.querySelector(".click-me");
    if (clickable) {
      clickable.addEventListener("click", () => this.selectText("script-text"));
    }

    let BookItem = (
      <div>
        <h1 class="lead">Description</h1>
        <br />
        <div class="script-detail-desc">{book.description}</div>
        <br />

        <h1 class="lead">Script Code</h1>
        <br />
        <div class="script-detail-script">
          <p class="click-me">Click here to copy script.</p>
          <div id="script-text">{book.publisher}</div>
        </div>
      </div>
    );

    return (
      <div className="ShowBookDetails">
        <div className="container">
          <h1 className="lead text-center">{book.title}</h1>
          <p className="text-center">{book.author}</p>
          <p className="text-center">{Date(book.published_date)}</p>
          <hr />
          <div>{BookItem}</div> <br />
          <br />
          <div className="">
            <div className="">
              <Link
                to={`/edit-book/${book._id}`}
                className="btn btn-outline-info btn-lg btn-block"
              >
                Edit Post
              </Link>
              <br />
            </div>
            <div className="">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={this.onDeleteClick.bind(this, book._id)}
              >
                Delete Post
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default showBookDetails;
