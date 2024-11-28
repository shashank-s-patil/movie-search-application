import './MoviePage.css';
import React from "react";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails";


export const MoviePage = () => {

  return (
    <div className="movie-page container">
      <MovieDetails/>
    </div>
  );
};