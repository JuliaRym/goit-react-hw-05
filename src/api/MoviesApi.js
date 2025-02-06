import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzU1ZDRmZTg4ZDgyYzMzMTZiMTJjM2E1MTA4Mzk2OCIsIm5iZiI6MTczODcxNjAwNS43MTksInN1YiI6IjY3YTJiMzY1YmUzNDU5ZDQ4MjgxMGRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G910mIc-WHi-nS_VWTEkwfKbCbzAAfqus_bnyZQX-f0"; // Wstaw swój token
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

/**
 * Pobiera listę najpopularniejszych filmów dnia.
 */
export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?language=en-US`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Błąd pobierania popularnych filmów:", error);
    throw error;
  }
};

/**
 * Wyszukuje filmy według podanego tytułu.
 */
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&language=en-US&page=1`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Błąd wyszukiwania filmów:", error);
    throw error;
  }
};

/**
 * Pobiera szczegóły konkretnego filmu.
 */
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.error("Błąd pobierania szczegółów filmu:", error);
    throw error;
  }
};

/**
 * Pobiera obsadę filmu.
 */
export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
      options
    );
    return response.data.cast;
  } catch (error) {
    console.error("Błąd pobierania obsady filmu:", error);
    throw error;
  }
};

/**
 * Pobiera recenzje filmu.
 */
export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Błąd pobierania recenzji filmu:", error);
    throw error;
  }
};

// /**
//  * Wyszukuje filmy według podanego tytułu.
//  * @param {string} query - Wyszukiwane hasło
//  * @returns {Promise} - Lista filmów
//  */
// export const searchMovies = async (query) => {
//   try {
//     const url = `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
//     const response = await axios.get(url, options);
//     return response.data.results;
//   } catch (error) {
//     console.error("Błąd pobierania filmów:", error);
//     throw error;
//   }
// };

// /**
//  * Pobiera szczegóły konkretnego filmu.
//  * @param {number} movieId - ID filmu
//  * @returns {Promise} - Szczegóły filmu
//  */
// export const getMovieDetails = async (movieId) => {
//   try {
//     const url = `${BASE_URL}/movie/${movieId}?language=en-US`;
//     const response = await axios.get(url, options);
//     return response.data;
//   } catch (error) {
//     console.error("Błąd pobierania szczegółów filmu:", error);
//     throw error;
//   }
// };

// /**
//  * Pobiera obsadę filmu.
//  * @param {number} movieId - ID filmu
//  * @returns {Promise} - Lista aktorów
//  */
// export const getMovieCredits = async (movieId) => {
//   try {
//     const url = `${BASE_URL}/movie/${movieId}/credits?language=en-US`;
//     const response = await axios.get(url, options);
//     return response.data.cast;
//   } catch (error) {
//     console.error("Błąd pobierania obsady filmu:", error);
//     throw error;
//   }
// };

// /**
//  * Pobiera recenzje filmu.
//  * @param {number} movieId - ID filmu
//  * @returns {Promise} - Lista recenzji
//  */
// export const getMovieReviews = async (movieId) => {
//   try {
//     const url = `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`;
//     const response = await axios.get(url, options);
//     return response.data.results;
//   } catch (error) {
//     console.error("Błąd pobierania recenzji filmu:", error);
//     throw error;
//   }
// };

// import axios from "axios";

// const API_KEY = "cc55d4fe88d82c3316b12c3a51083968";
// const BASE_URL = "https://api.themoviedb.org/3";

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

// export const getTrendingMovies = async () => {
//   const response = await axios.get("/trending/movie/day?language=en-US");
//   return response.data.results;
// };

// export const searchMovies = async (query) => {
//   const response = await axios.get(
//     `/search/movie?query=${query}&language=en-US&page=1`
//   );
//   return response.data.results;
// };

// export const getMovieDetails = async (movieId) => {
//   const response = await axios.get(`/movie/${movieId}?language=en-US`);
//   return response.data;
// };

// export const getMovieCast = async (movieId) => {
//   const response = await axios.get(`/movie/${movieId}/credits?language=en-US`);
//   return response.data.cast;
// };

// export const getMovieReviews = async (movieId) => {
//   const response = await axios.get(
//     `/movie/${movieId}/reviews?language=en-US&page=1`
//   );
//   return response.data.results;
// };
