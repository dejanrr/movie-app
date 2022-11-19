import MovieCard from "../movieCard/MovieCard.js";
import Flickity from "react-flickity-component";
import "./flickity.css";
import "./carousel.css";

const Carousel = ({ moviesArray, carouselTitle }) => {
  const flickityOptions = {
    freeScroll: true,
    contain: true,
    cellAlign: "left",
    prevNextButtons: true,
    pageDots: true,
    freeScrollFriction: 0.2,
    selectedAttraction: 0.01,
    friction: 0.15,
    groupCells: "100%",
    resize: true,
    draggable: true,
  };

  return (
    <div className="carousel-container">
      <h3 className="carouselTitle">{carouselTitle}</h3>
      <Flickity options={flickityOptions}>
        {moviesArray?.results
          ? moviesArray.results.slice(0, 9).map((movie) => (
              <div className="carousel-item">
                <MovieCard key={movie.id} {...movie} movie={movie} />
              </div>
            ))
          : "No results found"}
      </Flickity>
    </div>
  );
};

export default Carousel;
