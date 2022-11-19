import { useEffect } from "react";
import { useNowPlayingMovies } from "../../services/movieServiceHooks";
import MovieGrid from "../../components/movieGrid/MovieGrid";

const NowPlayingMovies = () => {
  const { data: nowPlayingMovies, status } = useNowPlayingMovies();

  useEffect(() => {
    document.title = "In Theaters";
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
        moviePageName="Top Rated Movies"
        moviesArray={nowPlayingMovies}
      />
    </>
  );
};

export default NowPlayingMovies;
