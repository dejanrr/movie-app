import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import {
  useMovieInfo,
  useMovieImages,
  useActors,
  useWatchProvides,
  useMovieReviews,
  useSimilarMovies,
} from "../../services/movieServiceHooks";
import ParallaxComp from "../../components/parallaxComp/ParallaxComp";
import Carousel from "../../components/carousel/Carousel";
import Info from "../../components/info/Info";
import MovieCredits from "../../components/movieCredits/MovieCredits";
import Popup from "../../components/popup/Popup";
import MovieReview from "../../components/movieReview/MovieReview";
import "./movieInfo.css";
import WatchProviders from "../../components/watchProviders/WatchProviders";

const MovieInfo = () => {
  const { selectedMovie } = useContext(MovieContext);

  const { data: movieInfo } = useMovieInfo(selectedMovie);
  const { data: similarMovies } = useSimilarMovies(selectedMovie);
  const { data: movieReviews } = useMovieReviews(selectedMovie);
  const { data: images } = useMovieImages(selectedMovie);
  const { data: actors } = useActors(selectedMovie);
  const { data: watchProviders } = useWatchProvides(selectedMovie);

  useEffect(() => {
    document.title = ` ${movieInfo?.title} (${movieInfo?.release_date.slice(
      0,
      4
    )})`;

    console.log(actors);
  }, [actors]);

  return (
    <div className="movie-info-page">
      <ParallaxComp data={images} />
      <Info infoData={movieInfo} actors={actors} />
      <Popup />
      <div className="movie-info-container">
        <div className="movie-info-wrapper">
          <div className="movie-info-container-left">
            <div className="synopsis">{movieInfo?.overview}</div>
            <table className="movie-details-table">
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Original name:</strong>
                </td>
                <td className="movie-details-table-data">
                  {movieInfo?.original_title ? movieInfo?.original_title : ""}
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Language:</strong>
                </td>
                <td className="movie-details-table-data">
                  <ul className="table-cell-list">
                    {movieInfo?.spoken_languages?.length
                      ? movieInfo?.spoken_languages.map((language) => (
                          <li className="table-cell-li">{language.name}</li>
                        ))
                      : "No results found"}
                  </ul>
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Status:</strong>
                </td>
                <td className="movie-details-table-data">
                  {movieInfo?.status}
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Genre:</strong>
                </td>
                <td className="movie-details-table-data">
                  <ul className="table-cell-list">
                    {movieInfo?.genres?.length
                      ? movieInfo?.genres.map((genre) => (
                          <li className="table-cell-li">{genre.name}</li>
                        ))
                      : "No results found"}
                  </ul>
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Country</strong>
                </td>
                <td className="movie-details-table-data">
                  <ul className="table-cell-list">
                    {movieInfo?.production_countries?.length
                      ? movieInfo?.production_countries.map((country) => (
                          <li className="table-cell-li">{country.name}</li>
                        ))
                      : "No results found"}
                  </ul>
                </td>
              </tr>
              <tr className="movie-details-table-row">
                <td className="movie-details-table-data">
                  <strong>Production</strong>
                </td>
                <td className="movie-details-table-data">
                  <ul className="table-cell-list">
                    {movieInfo?.production_companies?.length
                      ? movieInfo?.production_companies.map((company) => (
                          <li className="table-cell-li">{company.name}</li>
                        ))
                      : "No results found"}
                  </ul>
                </td>
              </tr>
            </table>
            <div className="similar-movies">
              <h3>More Like This</h3>
              <Carousel moviesArray={similarMovies} />
            </div>
            <MovieCredits movieCast={actors} creditsTitle="Full Cast List" />
            <MovieCredits movieCrew={actors} creditsTitle="Full Crew List" />
            <div className="movie-reviews">
              <div className="movie-reviews-container">
                <div className="full-credits-header">Recent Reviews</div>
                {movieReviews?.results
                  ? movieReviews.results.map((review) => (
                      <MovieReview review={review} />
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div className="movie-info-container-right">
            <div className="movie-watch-providers">
              <WatchProviders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
