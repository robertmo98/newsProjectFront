import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContsxt";
import ProfilePic from "../UserProfilePic";
import DarkModeContext from "../../contexts/DarkModeContext";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import logo from "../../ui/logo.svg";
import DropDown from "./Dropdown";
import AdminDropDown from "../adminControls/AdminDropDown";

const Navbar = () => {
  const { isLoggedIn, isAdmin, profilePic, logout } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  return (
    <nav
      className="gap-2 shadow-md pt-4 pl-4 pr-4 lg:pl-8 lg:pr-8 xl:gap-10  flex bg-slate-200 items-center text-sm md:text-base
    text-sky-900 font-bold font-mono
     dark:bg-slate-900 dark:text-white
     
     "
    >
      {isLoggedIn && (
        <NavLink className="p-2" to="/home">
          <img src={logo} className="h-12 w-12" alt="the logo of the website" />
        </NavLink>
      )}
      {!isLoggedIn && (
        <img src={logo} className="h-12 w-12" alt="user's image" />
      )}
      {isLoggedIn && (
        <NavLink
          className="hover:underline hidden lg:block p-1 md:p-2"
          to="/home"
        >
          All Topics
        </NavLink>
      )}
      <div className="block lg:hidden text-xl ">
        <p className="">Science News</p>
      </div>
      <NavLink className="hover:underline p-1 md:p-2 selft-center" to="/about">
        About Us
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className="hover:underline hidden lg:block p-1 md:p-2 "
          to="/biology"
        >
          Biology
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className="hover:underline hidden lg:block  p-1 md:p-2 "
          to="/chemistry"
        >
          Chemistry
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className="hover:underline hidden lg:block  p-1 md:p-2"
          to="/physics"
        >
          Physics
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className="hover:underline hidden lg:block  p-1 md:p-2 "
          to="/space"
        >
          Space
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className="hover:underline hidden lg:block  p-1 md:p-2 "
          to="/tech"
        >
          Tech
        </NavLink>
      )}
      <div className="flex-1"></div>
      {isLoggedIn && isAdmin && <AdminDropDown />}

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
        <button
          className="hover:underline hidden lg:block"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      )}
      <button
        className="pl-4"
        onClick={() => {
          toggleDarkMode();
        }}
      >
        {darkMode ? <BsSunFill /> : <BsMoonFill />}
      </button>
      {isLoggedIn && (
        <div className="lg:hidden pl-4 pr-4">
          <DropDown />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
