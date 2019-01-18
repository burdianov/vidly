import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    console.log("old: ", this.state.movies);
    deleteMovie(movie);
    console.log("oldDel: ", this.state.movies);
    //let newList = [...this.state.movies];
    const movies = this.state.movies.filter(moive => movie._id !== movie);
    console.log("new: ", movies);
    this.setState({ movies: movies });
  };

  render() {
    const count = this.state.movies.length;
    return (
      <React.Fragment>
        <div className="container">
          <p className="mb-4 mt-4">Showing {count} movies in the database</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr key="movie._id">
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete({ movie: movie._id })}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
