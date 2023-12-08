import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContsxt";

function DropDown() {
    const { logout } = useContext(AuthContext)
  return (
    <Menu>
      <MenuHandler>
        <Button className="shadow-none">
          <RxHamburgerMenu size={32} className="text-sky-900 dark:text-white"/>
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem className="p-1">
          <NavLink className="text-sky-900 hover:underline" to="/home">
            All Topics
          </NavLink>
        </MenuItem>

        <MenuItem className="p-1">
          <NavLink className="text-sky-900 hover:underline" to="/biology">
            Biology
          </NavLink>
        </MenuItem>

        <MenuItem className="p-1">
          <NavLink className="text-sky-900 hover:underline" to="/chemistry">
            Chemistry
          </NavLink>
        </MenuItem>

        <MenuItem className="p-1">
          <NavLink className="text-sky-900 hover:underline" to="/physics">
            Physics
          </NavLink>
        </MenuItem>

        <MenuItem className="p-1">
          <NavLink className="text-sky-900 hover:underline" to="/space">
            Space
          </NavLink>
        </MenuItem>

        <MenuItem className="p-1">
          <NavLink className="text-sky-900 hover:underline" to="/tech">
            Tech
          </NavLink>
        </MenuItem>

        {/* <MenuItem>
        <NavLink to="/home">
            Home
        </NavLink>
        </MenuItem>


        <MenuItem>
        <NavLink to="/home">
            Home
        </NavLink>
        </MenuItem> */}

        <hr className="my-3" />
        <MenuItem
          className="hover:underline text-sky-900"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default DropDown;
