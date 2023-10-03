import React from "react";
import './Head.css';
import '../../App.css';
import Navigation from "../Navigation/Navigation";

function Head() {
  return (
    <div className="head">
      <Navigation color="#ffff" showName={false} />
    </div>
  );
}

export default Head;
