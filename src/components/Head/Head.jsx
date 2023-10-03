import React from "react";
import "./Head.css";
import "../../App.css";
import Navigation from "../Navigation/Navigation";

/**
 * Head component for displaying the website's header.
 *
 * @component
 * @returns {JSX.Element} The Head component JSX.
 */

function Head() {
  return (
    <div className="head">
      <Navigation color="#ffff" showName={false} />
    </div>
  );
}

export default Head;
