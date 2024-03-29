const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

// routes
const books = require("./routes/api/books");
const comments = require("./routes/api/comments");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/books", books);
app.use("/api/comments", comments);

const port = process.env.PORT || 8082;

const server = app.listen(port, () => {
  const port = server.address().port;
  console.log(`Server running on port ${port}`);
});
