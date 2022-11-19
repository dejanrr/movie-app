import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { useUpcomingMovies } from "../../services/movieServiceHooks.js";
import MovieGrid from "../../components/movieGrid/MovieGrid";

const UpcomingMovies = () => {
  const { upcomingMoviesPage, setUpcomingMoviesPage } =
    useContext(MovieContext);

  const { data: upcomingMovies, status } =
    useUpcomingMovies(upcomingMoviesPage);

  useEffect(() => {
    document.title = "Upcoming Movies";
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <>
      <MovieGrid
        moviePageName="Upcoming Movies"
        movieGridPage={upcomingMoviesPage}
        setMovieGridPage={setUpcomingMoviesPage}
        moviesArray={upcomingMovies}
      />
    </>
  );
};

export default UpcomingMovies;
