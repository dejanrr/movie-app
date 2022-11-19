import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">True Film</div>
        <div>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <NavLink to="/popular">Popular</NavLink>
            </li>
            <li>
              <NavLink
                to="toprated"
                className={({ isActive }) =>
                  isActive ? "lactive-class" : "not-active-class"
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="upcoming"
                className={({ isActive }) =>
                  isActive ? "lactive-class" : "not-active-class"
                }
              >
                Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink
                to="intheaters"
                className={({ isActive }) =>
                  isActive ? "lactive-class" : "not-active-class"
                }
              >
                In Theaters
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="favorites">
          <NavLink
            to="favorites"
            className={({ isActive }) =>
              isActive ? "lactive-class" : "not-active-class"
            }
          >
            Favorites
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
