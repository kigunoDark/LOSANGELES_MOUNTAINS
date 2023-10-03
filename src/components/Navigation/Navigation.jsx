import React from "react";
import "./Navigation.css";
import Logo from "../View/Logo/Logo";
import Menu from "../View/Menu/Menu";

/**
 * Navigation component for displaying the website's navigation bar.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} props.color - The color of the navigation elements.
 * @param {boolean} props.showName - Indicates whether to display the logo name.
 * @returns {JSX.Element} The Navigation component JSX.
 */

function Navigation({ color, showName }) {
  return (
    <div className="navigation">
      <Logo showName={showName} colorTitle="#4d4d4d" colorSubtitle="#414f6b" />
      <Menu color={color} />
    </div>
  );
}

export default Navigation;
