import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import CollectionCard from "../../components/collectionCard/CollectionCard";
import {
  useMovieCollections,
  useCollectionImages,
} from "../../services/movieServiceHooks";
import ParallaxComp from "../../components/parallaxComp/ParallaxComp";
import Info from "../../components/info/Info";
import "./collectionInfo.css";
import MovieCard from "../../components/movieCard/MovieCard";

const CollectionInfo = () => {
  const { selectedCollection, IMG_API_1280 } = useContext(MovieContext);

  const { data: collectionInfo } = useMovieCollections(selectedCollection);
  const { data: collectionImages } = useCollectionImages(selectedCollection);

  useEffect(() => {
    document.title = `${collectionInfo?.name}`;

    console.log(collectionInfo);
  }, [collectionInfo]);

  return (
    <div className="collection-info-page">
      <ParallaxComp data={collectionImages} />
      <Info infoData={collectionInfo} />
      <div className="collection-info-container">
        <div className="collection-info-wrapper">
          <div className="movie-info-container-left">
            <div>{collectionInfo?.overview}</div>
            <div>
              {collectionInfo
                ? collectionInfo?.parts.map((movie) => (
                    <MovieCard movie={movie} {...movie} />
                  ))
                : ""}
            </div>
          </div>
          <div className="movie-info-container-right">
            sdadsadsaksaoisda ksadposaopdsa
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
