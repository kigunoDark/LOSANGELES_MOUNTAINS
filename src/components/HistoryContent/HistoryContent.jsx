import React from "react";
import "./HistoryContent.css";
import "../../App.css";
import { DESCRIPTION_HISTORY } from "./HistoryContentConstants";
import CustomTitle from "../View/CustomTitle/CustomTitle";
import Carousel from "../View/Carousel/Carousel";

/**
 * HistoryContent component for displaying historical content.
 *
 * @component
 * @returns {JSX.Element} The HistoryContent component JSX.
 */
const carouselData = [
  { id: 1, url: "/images/alone.png" },
  { id: 2, url: "/images/nature.png" },
  { id: 3, url: "/images/alone.png" },
  { id: 4, url: "/images/nature.png" },
];

function HistoryContent() {
  const slidesToShow = 3;
  return (
    <div id="#team" className="history_content">
      <div className="app_container">
        <div>
          <CustomTitle url={"/images/history_1.png"} />
          <p>{DESCRIPTION_HISTORY}</p>
        </div>
      </div>
      <div className="carousel_content">
        <Carousel items={carouselData} slidesToShow={slidesToShow} />
      </div>
    </div>
  );
}

export default HistoryContent;
