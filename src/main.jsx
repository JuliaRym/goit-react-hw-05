import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importowanie BrowserRouter
import App from "./components/App";
import "modern-normalize";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import MoviesPage from "./pages/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import NotFoundPage from "./pages/NotFoundPage";

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/movies" element={<MoviesPage />} />
//       <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   </Router>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
