const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
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
  liked: {
    type: Boolean,
    default: false,
    required: true,
  },
  published_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Like = mongoose.model("like", LikeSchema);
