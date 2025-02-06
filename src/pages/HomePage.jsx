import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import { getTrendingMovies } from "../api/moviesApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading movies!</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
