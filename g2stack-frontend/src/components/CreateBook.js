import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { auth } from "../firebase";

class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      reference: "",
      script: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      UID: auth.currentUser.uid,
      author: auth.currentUser.displayName,
      description: this.state.description,
      reference: this.state.reference,
      script: this.state.script,
    };

    axios
      .post("https://g2stack.herokuapp.com/api/books", data)
      .then((res) => {
        this.setState({
          title: "",
          author: "",
          description: "",
          reference: "",
          script: "",
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
            <div className="col-md-8 m-auto"></div>
            <div className="col-md-8 m-auto">
              <div className="input-entry">
                <h1 className="lead text-center">Add Post</h1>
                <p className="text-center">Create new post</p>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
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
                    <label htmlFor="reference">Reference</label>

                    <input
                      type="text"
                      placeholder="Source of script if not original."
                      name="reference"
                      className="form-control"
                      value={this.state.reference}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description</label>

                    <textarea
                      type="text"
                      placeholder="Describe this script"
                      rows="5"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="script">Script</label>

                    <textarea
                      type="text"
                      placeholder="Paste in script"
                      rows="5"
                      name="script"
                      className="form-control"
                      value={this.state.script}
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
