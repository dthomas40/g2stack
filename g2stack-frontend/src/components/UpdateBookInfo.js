import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get(
        "https://g2stack.herokuapp.com/api/books/" + this.props.match.params.id
      )
      .then((res) => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
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
      published_date: this.state.published_date,
      publisher: this.state.publisher,
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

              {/* <div className='form-group'>
            <label htmlFor="published_date">Published Date</label>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={this.state.published_date}
                onChange={this.onChange}
              />
            </div> */}
              <div className="form-group">
                <label htmlFor="publisher">Script</label>
                <textarea
                  type="text"
                  placeholder="Publisher of this Book"
                  rows="5"
                  name="publisher"
                  className="form-control"
                  value={this.state.publisher}
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
