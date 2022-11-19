import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import "./movieCard.css";

const MovieCard = ({
  title,
  vote_average,
  vote_count,
  poster_path,
  backdrop_path,
  id,
  overview,
  release_date,
}) => {
  const { IMG_API_300, onMovieSelect } = useContext(MovieContext);

  const handleMovieSelect = () => {
    onMovieSelect(id);
  };

  return (
    <div onClick={handleMovieSelect} className="movie-card-container">
      <div className="movie-card-backdrop">
        <img
          src={IMG_API_300 + backdrop_path}
          alt={title}
          className="backdrop-img"
        />
      </div>
      <div className="movie-card-info">
        <img src={IMG_API_300 + poster_path} className="poster-img" />
        <div className="movie-card-info-content">
          <div onClick={handleMovieSelect} className="movie-card-title">
            <Link to="/movieinfo">
              {title}({release_date.slice(0, 4)})
            </Link>
          </div>
          <div className="movie-card-synopsis">{overview}</div>
        </div>
      </div>
      <div className="movie-card-footer">
        <div className="movie-card-footer-content">
          <div>{vote_average} star(s)</div>
          <div>{vote_count} vote(s)</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
