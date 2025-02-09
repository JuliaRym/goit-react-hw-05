import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import { searchMovies } from "../api/MoviesApi";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const queryFromUrl = searchParams.get("query") || "";
    setQuery(queryFromUrl);
    setSearchQuery(queryFromUrl);
  }, [searchParams]);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      searchMovies(searchQuery)
        .then((data) => {
          setMovies(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchQuery]);

  const handleSearch = () => {
    if (query.trim()) {
      setSearchParams({ query });
      setSearchQuery(query);
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
      {loading && <p>Loading movies...</p>}
      {error && <p>Error loading movies!</p>}
      {searchQuery && <MovieList movies={movies} query={searchQuery} />}
    </div>
  );
};

export default MoviesPage;
