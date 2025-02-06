import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import { searchMovies } from "../api/MoviesApi";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query) {
      setLoading(true);
      searchMovies(query)
        .then((data) => {
          setMovies(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <div className={css.inputDiv}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className={css.button}>
          Search
        </button>
      </div>
      {error && <p>Error loading movies!</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
