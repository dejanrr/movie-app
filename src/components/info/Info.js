import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import MovieRating from "../../components/movieRating/MovieRating";
import IMDB from "../../assets/images/IMDBlogo.png";
import arrowBack from "../../assets/images/arrow.png";
import heart from "../../assets/images/heart.png";
import "./info.css";

const Info = ({ infoData, actors }) => {
  const {
    setModalIsOpen,
    selectedMovie,
    selectedPerson,
    onPersonSelect,
    IMG_API_300,
    IMG_API_1280,
    addFavoriteMovie,
    favoriteMovies,
    setFavoriteMovies,
  } = useContext(MovieContext);

  return (
    <div className="info-container">
      <div className="info-wrapper">
        <div className="info-left">
          <img
            src={
              infoData?.poster_path
                ? IMG_API_1280 + infoData?.poster_path
                : IMG_API_1280 + infoData?.profile_path
            }
            className="info-image"
            width="165px"
          />
          <div className="info-left-content">
            <div className="info-left-row info-title">
              {infoData?.title ? infoData?.title : infoData?.name}
            </div>
            <div className="info-left-row">
              {infoData?.title ? (
                <>
                  <span>{infoData?.release_date.slice(0, 4)}</span> &nbsp;
                  &bull; &nbsp;
                  <span>{infoData.runtime} min</span>
                </>
              ) : (
                <>{infoData?.known_for_department}</>
              )}
            </div>
            <div className="info-left-row">
              {actors
                ? actors.cast
                    .slice(0, 3)
                    .map((actor) => (
                      <div className="actorname">{actor.name}</div>
                    ))
                : ""}
            </div>
            {infoData?.title ? (
              <div className="info-left-row">
                <div className="info-buttons">
                  <button onClick={() => setModalIsOpen(true)}>
                    Watch Trailer
                  </button>
                  <button onClick={() => addFavoriteMovie(selectedMovie)}>
                    Add to Favorites
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            {infoData?.birthday ? (
              <div className="info-left-row">
                {infoData?.birthday.slice(0, 4)} -
                {infoData?.deathday ? infoData?.deathday : ""}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="info-right">
          {infoData?.title ? (
            <div className="info-rating">
              <MovieRating infoData={infoData} />
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
