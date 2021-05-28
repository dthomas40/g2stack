import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { auth } from "../firebase";
import CommentCard from "./CommentCard";

class CreateComment extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      comments: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://g2stack.herokuapp.com/api/comments")
      .then((res) => {
        this.setState({
          comments: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from search");
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      PID: this.props.book._id,
      UID: auth.currentUser.uid,
      author: auth.currentUser.displayName,
      content: this.state.content,
    };

    axios
      .post("https://g2stack.herokuapp.com/api/comments", data)
      .then((res) => {
        window.location.reload();
        this.setState({
          author: "",
          content: "",
        });
      })
      .catch((err) => {
        console.log("Error in CreateComment!");
      });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
    document.getElementById("comment-input").scrollIntoView();
  }

  render() {
    const comments = this.state.comments;
    console.log("PrintComment: " + comments);
    let commentList, qComments;

    qComments = this.state.comments
      .filter((comment, k) => {
        return comment.PID.match(this.props.book._id);
      })
      .reverse();

    if (!qComments) {
      commentList = "there is no book record!";
    } else {
      commentList = qComments.map((comment, k) => (
        <CommentCard comment={comment} key={k} />
      ));
    }
    return (
      <div>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group comment-input">
            <label className="lead l-font" htmlFor="description">
              Comment
            </label>

            <textarea
              type="text"
              placeholder="Place your comment here."
              rows="2"
              name="content"
              className="form-control"
              value={this.state.content}
              onChange={this.onChange}
            />
          </div>

          <input type="submit" className="btn btn-primary w-100 met-3" />
        </form>

        <br />

        <div class="search-section">
          <div class="results">
            {commentList.map((comment, k) => {
              return <div>{comment}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateComment;
