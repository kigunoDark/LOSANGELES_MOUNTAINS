import React from "react";
import "./Navigation.css";
import Logo from "../View/Logo/Logo";
import Menu from "../View/Menu/Menu";


function Navigation({ color, showName }) {
  return (
    <div className="navigation">
      <Logo showName={showName} colorTitle="#4d4d4d" colorSubtitle="#414f6b" />
      <Menu color={color}/>
    </div>
  );
}

export default Navigation;
