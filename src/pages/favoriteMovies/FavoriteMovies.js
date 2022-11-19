import { useEffect, useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import MovieCard from "../../components/movieCard/MovieCard";
import { useMovieInfo } from "../../services/movieServiceHooks";

const FavoriteMovies = () => {
  const { favoriteMovies, setFavoriteMovies } = useContext(MovieContext);

  const { data: fav } = useMovieInfo(favoriteMovies);

  useEffect(() => {
    console.log(favoriteMovies);
  }, [favoriteMovies]);

  return (
    <div>{fav ? fav.map((movie) => <MovieCard movie={movie} />) : ""}</div>
  );
};

export default FavoriteMovies;
