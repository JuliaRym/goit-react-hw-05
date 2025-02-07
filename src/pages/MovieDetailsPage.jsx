import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../api/MoviesApi";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const backLinkHref = location.state?.from || "/";

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link to={backLinkHref} className={css.goBackButton}>
        Go back
      </Link>

      {loading && <p>Loading...</p>}
      {error && <p>Error loading movie details!</p>}

      {movie && (
        <>
          <div className={css.movieDetails}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.title}
            />

            <div className={css.details}>
              <h1>
                {movie.title} ({movie.release_date?.slice(0, 4)})
              </h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>

              <h3>Overview</h3>
              <p>{movie.overview}</p>

              <h3>Genres</h3>
              <p>{movie.genres?.map((genre) => genre.name).join(" ")}</p>
            </div>
          </div>

          <div className={css.additionalInfo}>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast" className={css.link}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" className={css.link}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
