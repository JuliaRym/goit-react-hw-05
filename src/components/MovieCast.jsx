import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../api/moviesApi";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getMovieCast(movieId)
      .then((data) => {
        setCast(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <p>Loading cast...</p>;
  }

  return (
    <div>
      {error && <p>Error loading cast information!</p>}
      {!error && cast.length === 0 ? (
        <p>No cast available.</p>
      ) : (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "/default-profile.png"
                }
                alt={actor.name}
              />
              <div>
                <h4>{actor.name}</h4>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
