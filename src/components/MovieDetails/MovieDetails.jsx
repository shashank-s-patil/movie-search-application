import './MovieDetails.css';
import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../api/tmdb-api/tmdb";
import { useParams } from "react-router-dom";


export const MovieDetails = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container movie-details mt-4">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="img-fluid"
      />
      <p className="mt-3"><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
    </div>
  );
};