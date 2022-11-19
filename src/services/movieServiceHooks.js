import { useQuery } from "react-query";

import { fetchPopularMovies } from "./movieService.js";
import { fetchTopRatedMovies } from "./movieService.js";
import { fetchUpcomingMovies } from "./movieService.js";
import { fetchNowPlayingMovies } from "./movieService.js";
import { fetchMovieInfo } from "./movieService.js";
import { fetchMovieImages } from "./movieService.js";
import { fetchMovieVideos } from "./movieService.js";
import { fetchPersonImages } from "./movieService.js";
import { fetchActors } from "./movieService.js";
import { fetchWatchProvides } from "./movieService.js";
import { fetchSimilarMovies } from "./movieService.js";
import { fetchMovieReviews } from "./movieService.js";
import { fetchCollections } from "./movieService.js";
import { fetchCollectionImages } from "./movieService.js";
import { fetchPersonInfo } from "./movieService.js";

export const usePopularMovies = (popularMoviesPage, isPreviousData) => {
  return useQuery(
    ["popular-movies", popularMoviesPage],
    () => fetchPopularMovies(popularMoviesPage),
    {
      keepPreviousData: true,
    }
  );
};

export const useTopRatedMovies = (topRatedMoviesPage, isPreviousData) => {
  return useQuery(
    ["top-rated-movies", topRatedMoviesPage],
    () => fetchTopRatedMovies(topRatedMoviesPage),
    {
      keepPreviousData: true,
    }
  );
};

export const useUpcomingMovies = (upcomingMoviesPage, isPreviousData) => {
  return useQuery(
    ["upcoming-movies", upcomingMoviesPage],
    () => fetchUpcomingMovies(upcomingMoviesPage),
    {
      keepPreviousData: true,
    }
  );
};

export const useNowPlayingMovies = () => {
  return useQuery(["now-playing-movies"], () => fetchNowPlayingMovies());
};

export const useMovieInfo = (selectedMovie) => {
  return useQuery(["movie-info", selectedMovie], () =>
    fetchMovieInfo(selectedMovie)
  );
};

export const useMovieImages = (selectedMovie) => {
  return useQuery(["images", selectedMovie], () =>
    fetchMovieImages(selectedMovie)
  );
};

export const useMovieVideos = (selectedMovie) => {
  return useQuery(["movie-videos", selectedMovie], () =>
    fetchMovieVideos(selectedMovie)
  );
};

export const usePersonInfo = (selectedPerson) => {
  return useQuery(["person-info", selectedPerson], () =>
    fetchPersonInfo(selectedPerson)
  );
};

export const usePersonImages = (selectedPerson) => {
  return useQuery(["person-images", selectedPerson], () =>
    fetchPersonImages(selectedPerson)
  );
};

export const useActors = (selectedMovie) => {
  return useQuery(["actors", selectedMovie], () => fetchActors(selectedMovie));
};

export const useWatchProvides = (selectedMovie) => {
  return useQuery(["watch-providers", selectedMovie], () =>
    fetchWatchProvides(selectedMovie)
  );
};

export const useSimilarMovies = (selectedMovie) => {
  return useQuery(["similar-movies", selectedMovie], () =>
    fetchSimilarMovies(selectedMovie)
  );
};

export const useMovieReviews = (selectedMovie) => {
  return useQuery(["movie-reviews", selectedMovie], () =>
    fetchMovieReviews(selectedMovie)
  );
};

export const useMovieCollections = (selectedCollection) => {
  return useQuery(["movie-collections", selectedCollection], () =>
    fetchCollections(selectedCollection)
  );
};

export const useCollectionImages = (selectedCollection) => {
  return useQuery(["collection-images", selectedCollection], () =>
    fetchCollectionImages(selectedCollection)
  );
};
