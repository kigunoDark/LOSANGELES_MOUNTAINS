import React from "react";
import { HISTORY_PAGE_LINK_NAME, TEAM_PAGE_LINK_NAME } from "./MenuConstants";
import "./Menu.css";

/**
 * Menu component for navigation.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} props.color - The color of menu items.
 * @returns {JSX.Element} The Menu component JSX.
 */

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
          <a
            href={`#${menuItem.link}`}
            className="underlined-text"
            style={menuItemStyle}
          >
            {menuItem.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
