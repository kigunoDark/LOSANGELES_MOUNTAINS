import React, { useState } from "react";
import TabMenu from "./TabMenu/TabMenu";
import Schedule from "./Schedule/Schedule";
import "./TeamContent.css";

/**
 * TeamContent component for displaying team-related content.
 *
 * @component
 * @returns {JSX.Element} The TeamContent component JSX.
 */

function TeamContent() {
  const [tab, setTab] = useState(0);

  const backgroundImageUrl =
    tab === 0
      ? "/images/team_background_1.png"
      : "/images/team_background_2.png";

  return (
    <div>
      <TabMenu tab={tab} setTab={setTab} />
      <div
        className="team_content"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <Schedule tab={tab} />
      </div>
    </div>
  );
}

export default TeamContent;
