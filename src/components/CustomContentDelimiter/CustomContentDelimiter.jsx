import React from "react";
import CustomTitle from "../View/CustomTitle/CustomTitle";
import "./CustomContentDelimiter.css";

/**
 * CustomPageDelimiter component for displaying a custom page delimiter.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} props.content - The content to display below the custom title.
 * @param {string} props.url - The URL of the custom title image.
 * @returns {JSX.Element} The CustomPageDelimiter component JSX.
 */

function CustomPageDelimiter({ content, url }) {
  return (
    <div className="custom_page_delimiter">
      <CustomTitle url={url} />
      <p>{content}</p>
    </div>
  );
}

export default CustomPageDelimiter;
