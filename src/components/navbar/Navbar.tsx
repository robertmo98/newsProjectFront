import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useContext } from "react";
import DarkModeContext from "../../contexts/DarkModeContext";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import AuthContext from "../../contexts/AuthContsxt";

const Navbar = () => {
  
  const {isLoggedIn, logout} = useContext(AuthContext);
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  return (
    <nav className="sm:gap-10 shadow-2xl p-8 gap-4 flex bg-fuchsia-50 text-fuchsia-900 dark:bg-fuchsia-900 dark:text-fuchsia-50">
      {isLoggedIn && <NavLink className="border-white border-2 p-2 rounded-lg" to="/home">
        All Topics
      </NavLink>}
      <NavLink className="border-white border-2 p-2 rounded-lg" to="/about">
        About Us
      </NavLink>
      {isLoggedIn && <NavLink className="border-white border-2 p-2 rounded-lg" to="/biology">
        Biology
      </NavLink>}
      {isLoggedIn && <NavLink className="border-white border-2 p-2 rounded-lg" to="/chemistry">
        Chemistry
      </NavLink>}
      {isLoggedIn && <NavLink className="border-white border-2 p-2 rounded-lg" to="/physics">
        Physics
      </NavLink>}
      {isLoggedIn && <NavLink className="border-white border-2 p-2 rounded-lg" to="/space">
        Space
      </NavLink>}
      {isLoggedIn &&<NavLink className="border-white border-2 p-2 rounded-lg" to="/tech">
        Tech
      </NavLink>}
      <div className="flex-1"></div>
      <button 
      onClick={() => {
        toggleDarkMode();
      }}
        >
        {darkMode ? <BsSunFill />: <BsMoonFill />}
      </button>
      {!isLoggedIn && <NavLink className="border-white border-2 p-2 rounded-lg" to="/login">
        Log In
      </NavLink>}
      {!isLoggedIn && <NavLink className="border-white border-2 p-2 rounded-lg" to="/register">
        Register
      </NavLink>}
      {isLoggedIn && <button onClick={() => {
        logout();
      }}>Logout</button>}
    </nav>
  );
};

export default Navbar;
