import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import PersonCard from "../personCard/PersonCard";
import "./movieCredits.css";
/* import blank from '../../assets/images/blankProf.png'; */

const MovieCredits = ({ movieCast, movieCrew, creditsTitle }) => {
  const {
    IMG_API_300,
    fullCastOpen,
    setFullCastOpen,
    fullCrewOpen,
    setFullCrewOpen,
    onPersonSelect,
  } = useContext(MovieContext);

  return (
    <div className="movie-credits">
      {movieCast?.cast ? (
        <>
          <div className="full-credits-header">
            <h3>{creditsTitle}</h3>
            <button onClick={() => setFullCastOpen(!fullCastOpen)}>Open</button>
          </div>
          <table className={fullCastOpen ? "cast-table-open" : "cast-table"}>
            {movieCast.cast.map((person) => (
              <tr>
                <td>
                  <PersonCard person={person} {...person} />
                </td>
                <td>{person.name}</td>
                <td>{person.character}</td>
              </tr>
            ))}
          </table>
        </>
      ) : (
        <>
          {movieCrew?.crew ? (
            <>
              <div className="full-credits-header">
                <h3>{creditsTitle}</h3>
                <button onClick={() => setFullCrewOpen(!fullCrewOpen)}>
                  Open
                </button>
              </div>
              <table
                className={fullCrewOpen ? "crew-table-open" : "crew-table"}
              >
                {movieCrew.crew.map((person) => (
                  <tr>
                    <td>
                      <PersonCard person={person} />
                      {person.name}
                    </td>
                    <td>{person.known_for_department}</td>
                  </tr>
                ))}
              </table>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default MovieCredits;
