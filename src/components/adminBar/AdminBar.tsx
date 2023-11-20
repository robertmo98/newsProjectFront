import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../contexts/AuthContsxt";

const AdminBar = () => {
  return (
    <nav className="sm:gap-10 shadow-2xl p-4 gap-4 flex bg-fuchsia-200 text-fuchsia-900 dark:bg-fuchsia-900 dark:text-fuchsia-50">
      <NavLink className="border-white border-2 p-2 rounded-lg" to="/post">
        Post An Article
      </NavLink>
    </nav>
  );
};

export default AdminBar;
