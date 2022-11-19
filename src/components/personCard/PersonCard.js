import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import blankProfile from "../../assets/images/blankProfile.png";
import "./personCard.css";

const PersonCard = ({ profile_path, id }) => {
  const { IMG_API_300, onPersonSelect } = useContext(MovieContext);

  const handlePersonSelect = () => {
    onPersonSelect(id);
  };

  return (
    <Link to="/personinfo">
      <div onClick={handlePersonSelect} className="person-card-container">
        <img
          src={profile_path ? IMG_API_300 + profile_path : blankProfile}
          className="person-card-image"
        />
      </div>
    </Link>
  );
};

export default PersonCard;
