import { useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
  const [selectedMovie, onMovieSelect] = useState();
  const [selectedPerson, onPersonSelect] = useState();
  const [selectedCollection, onCollectionSelect] = useState();

  const [movieInfo, setMovieInfo] = useState();
  const [personInfo, setPersonInfo] = useState();

  const [popularMoviesPage, setPopularMoviesPage] = useState(1);
  const [topRatedMoviesPage, setTopRatedMoviesPage] = useState(1);
  const [upcomingMoviesPage, setUpcomingMoviesPage] = useState(1);

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const [actors, setActors] = useState();
  const [crew, setCrew] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieReviews, setMovieReviews] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [similarMovies, setSimilarMovies] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [fullCastOpen, setFullCastOpen] = useState(false);
  const [fullCrewOpen, setFullCrewOpen] = useState(false);

  const IMG_API_300 = "https://image.tmdb.org/t/p/w300";
  const IMG_API_1280 = "https://image.tmdb.org/t/p/w1280";
  const IMG_API_ORIGINAL = "https://image.tmdb.org/t/p/original";

  const addFavoriteMovie = (selectedMovie) => {
    const newFavoritesList = [...favoriteMovies, selectedMovie];
    setFavoriteMovies(newFavoritesList);
  };

  return (
    <MovieContext.Provider
      value={{
        selectedMovie,
        onMovieSelect,
        selectedPerson,
        onPersonSelect,
        selectedCollection,
        onCollectionSelect,

        favoriteMovies,
        setFavoriteMovies,

        movieInfo,
        setMovieInfo,
        personInfo,
        setPersonInfo,

        addFavoriteMovie,

        popularMoviesPage,
        setPopularMoviesPage,
        topRatedMoviesPage,
        setTopRatedMoviesPage,
        upcomingMoviesPage,
        setUpcomingMoviesPage,

        actors,
        setActors,
        crew,
        setCrew,
        movieVideos,
        setMovieVideos,
        movieReviews,
        setMovieReviews,
        movieCredits,
        setMovieCredits,
        similarMovies,
        setSimilarMovies,

        modalIsOpen,
        setModalIsOpen,

        fullCastOpen,
        setFullCastOpen,
        fullCrewOpen,
        setFullCrewOpen,

        IMG_API_300,
        IMG_API_1280,
        IMG_API_ORIGINAL,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
