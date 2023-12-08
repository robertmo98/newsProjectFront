import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { PiShootingStar } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const AdminDropDown = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button className="shadow-none">
          <PiShootingStar size={32} className="text-yellow-600" />
          <p className="text-yellow-400">Editor</p>
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <NavLink to="/post">Post an article</NavLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AdminDropDown;
