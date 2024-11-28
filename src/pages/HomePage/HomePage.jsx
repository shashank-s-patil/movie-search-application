import './HomePage.css';
import React, { useState } from "react";
import { MovieSearch } from "../../components/MovieSearch/MovieSearch";
import { MovieList } from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../api/tmdb-api/tmdb";
import { LatestMovies } from '../../components/LatestMovies/LatestMovies';


export const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const data = await fetchMovies(query);
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page container mt-4">
      <MovieSearch onSearch={handleSearch} />
      {loading ? <p className="loading">Loading...</p> : <MovieList movies={movies} />}
      <LatestMovies/>
    </div>
  );
};