import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import MovieCard from "../../components/movieCard/MovieCard";
import "./personInfo.css";
import {
  usePersonImages,
  usePersonInfo,
} from "../../services/movieServiceHooks";
import Info from "../../components/info/Info";
import ParallaxComp from "../../components/parallaxComp/ParallaxComp";

const PersonInfo = () => {
  const { selectedPerson } = useContext(MovieContext);

  const { data: personInfo } = usePersonInfo(selectedPerson);
  const { data: images } = usePersonImages(selectedPerson);

  useEffect(() => {
    document.title = `${personInfo?.name}`;
    console.log(images);
  }, [images]);

  return (
    <div className="person-info-page">
      <ParallaxComp data={images} />
      <Info infoData={personInfo} />
      <div className="person-info-container">
        <div className="person-info-details">
          <div className="person-info-container-left">
            <div className="biography">{personInfo?.biography}</div>
          </div>
          <div className="person-info-container-right">
            <table className="person-details-table">
              <tr className="person-details-table-row">
                <td className="person-details-table-data">
                  <strong>Born:</strong>
                </td>
                <td className="person-details-table-data">
                  {personInfo?.birthday}
                </td>
              </tr>
              <tr className="person-details-table-row">
                <td className="person-details-table-data">
                  <strong>Birthplace:</strong>
                </td>
                <td className="person-details-table-data">
                  {personInfo?.place_of_birth}
                </td>
              </tr>
              {personInfo?.deathday ? (
                <tr className="person-details-table-row">
                  <td className="person-details-table-data">
                    <strong>Birthplace:</strong>
                  </td>
                  <td className="person-details-table-data">
                    {personInfo?.place_of_birth}
                  </td>
                </tr>
              ) : (
                ""
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
