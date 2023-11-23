import React from "react";
import "./Header.css";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

function Header() {
  return (
    <div className="header">
      <img alt="LOGO" className="header-logo" src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"  />
      <div className="header-center">
        <input type="text" id="search" placeholder="Anywhere  |  Anyweek "></input>
        
        <SearchIcon className="searchicon"/>
      </div>
      <div className="header-right">
        <a href="/Airbnbyourhome"><p>Airbnb your home</p></a>
        <LanguageIcon />
        <div className="together">
          <MenuIcon/>
        <PersonRoundedIcon/></div>
      </div>
    </div>
  );
}

export default Header;
