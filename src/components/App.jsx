import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const MoviesPage = React.lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = React.lazy(() => import("../pages/MovieDetailsPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
