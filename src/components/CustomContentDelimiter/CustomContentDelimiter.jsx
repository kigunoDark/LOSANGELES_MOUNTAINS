import React from "react";
import CustomTitle from "../View/CustomTitle/CustomTitle";
import './CustomContentDelimiter.css'


function CustomPageDelimiter({content, url}) {
  return (
      <div className="custom_page_delimiter">
        <CustomTitle url={url} />
        <p>
         {content}
        </p>
      </div>
  );
}

export default CustomPageDelimiter;
