import React from "react";
import CustomTitle from "../View/CustomTitle/CustomTitle";
import './CustomContentDelimiter.css'


function CustomPageDelimiter() {
  return (
      <div className="custom_page_delimiter">
        <CustomTitle url={"/images/history_2.png"} />
        <p>
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
          quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
          tortor nec congue.{" "}
        </p>
      </div>
  );
}

export default CustomPageDelimiter;
