import React from "react";
import "./TabMenu.css";
import { TABS_NAMES } from "./TabMenuConstants";

/**
 * TabMenu component for displaying a tab-based navigation menu.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {number} props.tab - The currently active tab.
 * @param {function} props.setTab - A function to set the active tab.
 * @returns {JSX.Element} The TabMenu component JSX.
 */

function TabMenu({ tab, setTab }) {
  return (
    <div className="tab_menu">
      <div className="app_container">
        {TABS_NAMES.map(({ id, name }) => (
          <span
            key={id}
            className={tab === id ? "hovered" : undefined}
            onClick={() => setTab(id)}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TabMenu;
