import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from './../../auth/context/AuthContext';

export const Navbar = () => {

  const { user, logout } = useContext(AuthContext)
  
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login',{
      replace: true
    });

  };

  const onActive = ({ isActive }) => {
    if (isActive) {
      return "active";
    }
    return "";
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${onActive({ isActive })}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${onActive({ isActive })}`
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${onActive({ isActive })}`
            }
            to="/search"
          >
            Search
          </NavLink>
          
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">
            { user ? user.name : 'Wilson' }
          </span>
          <button
            className="nav-item nav-link btn"
            onClick={onLogout}
        >   
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
