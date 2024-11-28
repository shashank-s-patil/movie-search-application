import './MovieList.css';
import React from "react";
import { MovieCard } from "../MovieCard/MovieCard";


export const MovieList = ({ movies }) => {

  return (
    <div className="movie-list-div row">
      {movies.map((movie) => (
        <div className="movie-list col-md-4" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};