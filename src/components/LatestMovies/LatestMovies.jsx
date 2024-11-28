import "./LatestMovies.css";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../api/tmdb-api/tmdb";
import { MovieList } from "../MovieList/MovieList";


export const LatestMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const data = await fetchMovies("latest");
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching latest movies:", error);
      }
    };
    fetchLatest();
  }, []);

  return (
    <div className="latest-movies">
      <h2 className="text-center mb-4">Latest Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};