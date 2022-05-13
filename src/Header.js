import React from "react";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@mui/material";
function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar
          className='header_avatar'
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className='header__search'>
        <SearchIcon />
        <input placeholder='Search' />
      </div>
      <div className='header__right'>
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
