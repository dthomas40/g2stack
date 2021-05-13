import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher,
    };

    axios
      .post("https://g2stack.herokuapp.com/api/books", data)
      .then((res) => {
        this.setState({
          title: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link
                to="/"
                className="user-actions btn btn-outline-dark float-left"
              >
                Return
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="lead text-center">Add Post</h1>
              <p className="text-center">Create new post</p>

              <div className="input-entry">
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Title of the Post"
                      name="title"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Author"
                      name="author"
                      className="form-control"
                      value={this.state.author}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Describe this script"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="date"
                      placeholder="published_date"
                      name="published_date"
                      className="form-control"
                      value={this.state.published_date}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Paste in script"
                      name="publisher"
                      className="form-control"
                      value={this.state.publisher}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-outline-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;
