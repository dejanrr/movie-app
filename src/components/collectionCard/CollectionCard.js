import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import "./collectionCard.css";

const CollectionCard = ({ collectionData }) => {
  const { IMG_API_300, onCollectionSelect } = useContext(MovieContext);

  const handleCollectionSelect = () => {
    onCollectionSelect(collectionData.id);
  };

  return (
    <div className="collection-card-container">
      <Link to="/collectioninfo">
        <img
          onClick={handleCollectionSelect}
          src={IMG_API_300 + collectionData?.backdrop_path}
          alt={collectionData?.name}
          className="collection-backdrop"
        />
      </Link>
      <div className="collection-card-title">{collectionData?.name}</div>
    </div>
  );
};

export default CollectionCard;
