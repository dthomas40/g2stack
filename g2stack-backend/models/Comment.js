const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  PID: {
    type: String,
    required: true,
  },
  UID: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  published_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comment = mongoose.model("comment", CommentSchema);
