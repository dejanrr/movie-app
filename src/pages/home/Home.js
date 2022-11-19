import { useEffect, useState, useContext } from "react";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import SellingPoint from "../../components/sellingPoint/SellingPoint";
import {
  useMovieCollections,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../../services/movieServiceHooks";
import { MovieContext } from "../../Context/MovieContext";
import CollectionCard from "../../components/collectionCard/CollectionCard";
import "./home.css";

const Home = () => {
  const { popularMoviesPage, topRatedMoviesPage, upcomingMoviesPage } =
    useContext(MovieContext);

  const { data: popularMovies } = usePopularMovies(popularMoviesPage);
  const { data: topRatedMovies } = useTopRatedMovies(topRatedMoviesPage);
  const { data: upcomingMovies } = useUpcomingMovies(upcomingMoviesPage);
  const { data: starWarsCollection } = useMovieCollections(10);
  const { data: batmanCollection } = useMovieCollections(948485);
  const { data: avengersCollection } = useMovieCollections(86311);
  const { data: lotrCollection } = useMovieCollections(119);

  return (
    <div className="home">
      <Header />
      <main>
        <div className="home-row">
          <div className="selling-points">
            <SellingPoint
              head="Deciding what to watch next?"
              text="There are many websites that offer movie recommendations but fail to provide good ones. True Film makes it super easy to discover great movies."
            />
            <SellingPoint
              head="Tired of bad recommendations?"
              text="We collect movie data so you don't have to. Just click on the image of the movie you are are interested in and you will get every information you need. "
            />
            <SellingPoint
              head="Keep track of everything"
              text="With True Film you can keep track of movies by adding them to your own watch list. This allows you to surround yourself with great movies and saves you time."
            />
          </div>
        </div>
        <div className="home-row">
          <div className="collections">
            <CollectionCard collectionData={starWarsCollection} />
            <CollectionCard collectionData={batmanCollection} />
            <CollectionCard collectionData={avengersCollection} />
            <CollectionCard collectionData={lotrCollection} />
          </div>
        </div>
        <div className="home-row">
          <div className="home-carousel">
            <Carousel
              moviesArray={popularMovies}
              carouselTitle="Most popular movies"
            />
          </div>
        </div>
        <div className="home-row">
          <div className="home-carousel">
            <Carousel
              moviesArray={topRatedMovies}
              carouselTitle="Top rated movies"
            />
          </div>
        </div>
        <div className="home-row">
          <div className="home-carousel">
            <Carousel
              moviesArray={upcomingMovies}
              carouselTitle="Upcoming movies"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
