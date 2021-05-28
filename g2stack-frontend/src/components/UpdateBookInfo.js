import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      description: "",
      reference: "",
      script: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://g2stack.herokuapp.com/api/books/" + this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          title: res.data.title,
          author: res.data.author,
          description: res.data.description,
          reference: res.data.reference,
          script: res.data.script,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo");
      });
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
      reference: this.state.reference,
      script: this.state.script,
    };

    axios
      .put(
        "https://g2stack.herokuapp.com/api/books/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/show-book/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="input-entry col-md-8 m-auto">
            <h1 className="lead text-center">Edit Post</h1>
            <p className="text-center">Update Post Info</p>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Title your script."
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author</label>
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
                <label htmlFor="reference">Reference</label>
                <input
                  type="text"
                  placeholder="Reference URL"
                  name="reference"
                  className="form-control"
                  value={this.state.reference}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  placeholder="Describe this book"
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
                  placeholder="Script"
                  rows="5"
                  name="script"
                  className="form-control"
                  value={this.state.script}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBookInfo;
