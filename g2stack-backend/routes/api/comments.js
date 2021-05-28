const express = require("express");
const router = express.Router();

// Load Book model
const Comment = require("../../models/Comment");

// @route GET api/comments/test
// @description tests comments route
// @access Public
router.get("/test", (req, res) => res.send("comment route testing!"));

// @route GET api/comments
// @description Get all comments
// @access Public
router.get("/", (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) =>
      res.status(404).json({ nocommentsfound: "No Comments found" })
    );
});

// @route GET api/comments/:id
// @description Get single comment by id
// @access Public
router.get("/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) =>
      res.status(404).json({ nocommentfound: "No Comment found" })
    );
});

// @route GET api/comments
// @description add/save comment
// @access Public
router.post("/", (req, res) => {
  Comment.create(req.body)
    .then((comment) => res.json({ msg: "Comment added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this comment" })
    );
});

// @route GET api/comments/:id
// @description Update comment
// @access Public
router.put("/:id", (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body)
    .then((comment) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/comments/:id
// @description Delete comment by id
// @access Public
router.delete("/:id", (req, res) => {
  Comment.findByIdAndRemove(req.params.id, req.body)
    .then((comment) => res.json({ mgs: "Comment entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a comment" }));
});

module.exports = router;
