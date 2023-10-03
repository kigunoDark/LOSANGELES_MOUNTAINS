import React from "react";
import { HISTORY_PAGE_LINK_NAME, TEAM_PAGE_LINK_NAME } from "./MenuConstants";
import './Menu.css';

function Menu({ color }) {
  const menuItemStyle = { color };
  const menuItems = [
    { name: HISTORY_PAGE_LINK_NAME, link: "history" },
    { name: TEAM_PAGE_LINK_NAME, link: "team" },
  ];

  return (
    <ul className="menu">
      {menuItems.map((menuItem, index) => (
        <li key={index}>
          <a href={`#${menuItem.link}`} className="underlined-text" style={menuItemStyle}>
            {menuItem.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;

