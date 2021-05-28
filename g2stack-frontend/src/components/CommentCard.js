import React from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import { auth } from "../firebase";
import axios from "axios";

const CommentCard = (props) => {
  const comment = props.comment;
  const date = new Date(comment.published_date);
  const date_formatted =
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2) +
    " " +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + date.getDate()).slice(-2) +
    "/" +
    date.getFullYear();

  async function onDeleteClick(id) {
    await axios
      .delete("https://g2stack.herokuapp.com/api/comments/" + id)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error form CommentCard_deleteClick");
      });
    window.location.reload();
    alert("Comment has been deleted.");
  }

  return (
    <div class="query-card">
      <div class="card-contents comment">
        <div>
          <h4 className="lead s-font">{date_formatted}</h4>

          <h2>{comment.content}</h2>
          <h3>{comment.author}</h3>
        </div>
        {auth.currentUser && auth.currentUser._id === comment.uid && (
          <div>
            <Button
              className="delete-comment-button btn-danger lead s-font"
              onClick={onDeleteClick.bind(this, comment._id)}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
