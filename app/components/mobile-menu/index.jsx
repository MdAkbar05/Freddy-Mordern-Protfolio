import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React from "react";
import { ImCoinEuro } from "react-icons/im";
import { IoChatbubbleOutline } from "react-icons/io5";

import { MdOutlineKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import avatar from "../../components/navbar/img/avatar.png";

const MobileMenu = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button className="border text-base" variant="text">
          Menu
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <div className="flexCenter gap-2">
            <Avatar src={avatar.src} alt="avatar" />
            <div>Freddy Ch.</div>
            <div className="cursor-pointer">
              <MdOutlineKeyboardArrowDown className="h-6 w-6 text-gray-400 hover:text-gray-900 transition-colors" />
            </div>
          </div>{" "}
        </MenuItem>
        <MenuItem className="text-center">Profile</MenuItem>
        <MenuItem className="text-center">Abouts</MenuItem>
        <MenuItem className="text-center">Notifications</MenuItem>

        <hr className="my-3" />
        <MenuItem className="text-center">Setting</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
