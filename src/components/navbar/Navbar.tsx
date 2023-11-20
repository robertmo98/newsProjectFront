import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContsxt";
import { GiMaterialsScience } from "react-icons/gi";
import ProfilePic from "../UserProfilePic";
import DarkModeContext from "../../contexts/DarkModeContext";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import  logo  from "../../ui/logo.svg"
// 

const Navbar = () => {
  const { isLoggedIn, profilePic, logout } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav
      className="sm:gap-10 shadow-md pt-4 pl-4 pr-4 gap-4 flex bg-white/95
    text-sky-900 font-bold font-mono 
     dark:bg-slate-900 dark:text-white"
    >
      <NavLink className="p-2" to="/home">
        <img src={logo} style={{ width: '50px', height: '50px' }}/>
        {/* <GiMaterialsScience /> */}
      </NavLink>
      {isLoggedIn && (
        <NavLink className="hover:underline  p-2 " to="/home">
          All Topics
        </NavLink>
      )}
      <NavLink className="hover:underline  p-2 " to="/about">
        About Us
      </NavLink>
      {isLoggedIn && (
        <NavLink className="hover:underline  p-2 " to="/biology">
          Biology
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className="hover:underline  p-2 " to="/chemistry">
          Chemistry
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className="hover:underline  p-2 " to="/physics">
          Physics
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className="hover:underline  p-2 " to="/space">
          Space
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className="hover:underline  p-2 " to="/tech">
          Tech
        </NavLink>
      )}
      <div className="flex-1"></div>

      {isLoggedIn && (
        <NavLink className="p-2 " to="/userInfo">
          <ProfilePic profilePic={profilePic} />
        </NavLink>
      )}

      {!isLoggedIn && (
        <NavLink className="hover:underline p-2 " to="/login">
          Log In
        </NavLink>
      )}
      {!isLoggedIn && (
        <NavLink className="hover:underline p-2 " to="/register">
          Register
        </NavLink>
      )}
      {isLoggedIn && (
        <button className="hover:underline"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      )}
      <button
        onClick={() => {
          toggleDarkMode();
        }}
      >
        {darkMode ? <BsSunFill /> : <BsMoonFill />}
      </button>
    </nav>
  );
};

export default Navbar;
