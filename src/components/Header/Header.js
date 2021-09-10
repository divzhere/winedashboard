import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";
import { ReactComponent as BellIcon } from "../../assets/bell_icon.svg";
import { ReactComponent as Avatar } from "../../assets/avatar.svg";
import { ReactComponent as DropDownIcon } from "../../assets/drop_down.svg";
export default function Header() {
  return (
    <header className="header_container">
      <div className="brand_container">
        <Logo className="header_logo" />
        <div className="header_search">
          <SearchIcon />
          <input
            type="text"
            className="header_search_input"
            placeholder="Search wines, customers here..."
          ></input>
        </div>
      </div>

      <div className="header_nav">
        <BellIcon className="bell_icon" />
        <div className="user_avatar">
          <div className="user_name">Nicholas D.</div>
          <Avatar className="user_avatar_img" />
          <DropDownIcon />
        </div>
      </div>
    </header>
  );
}
