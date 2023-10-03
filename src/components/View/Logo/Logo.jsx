import React from "react";
import { LOGO_CITY_TITLE, LOGO_CITY_SUBTITLE } from "./LogoConstants";
import "./Logo.css";

/**
 * Logo component for displaying a website logo.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {boolean} props.showName - Indicates whether to display the logo name.
 * @param {string} props.colorTitle - The color of the logo title.
 * @param {string} props.colorSubtitle - The color of the logo subtitle.
 * @returns {JSX.Element} The Logo component JSX.
 */

function Logo({ showName, colorTitle, colorSubtitle }) {
  return (
    <div className="logo_content">
      <img className="logo" src="/images/logo.png" alt="webpage-logo" />
      {showName ? (
        <div className="logo_name">
          <span style={{ color: colorTitle }}>{LOGO_CITY_TITLE}</span>
          <span style={{ color: colorSubtitle, letterSpacing: 1 }}>
            {LOGO_CITY_SUBTITLE}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default Logo;
