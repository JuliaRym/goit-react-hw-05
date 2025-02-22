import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies, query }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} className={css.movieItem}>
          <Link
            // to={`/movies/${movie.id}`}
            to={`/movies/${movie.id}?query=${query}`}
            state={{ from: location }}
            className={css.movieLink}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
