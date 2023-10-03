import React from "react";
import "./TabMenu.css";
import { TABS_NAMES } from "./TabMenuConstants";

function TabMenu({ tab, setTab }) {
  return (
    <div className="tab_menu">
      <div className="app_container">
        {TABS_NAMES.map(({id, name}) => (
          <span key={id}
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
