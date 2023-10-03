import React from "react";
import "./CustomTitle.css";

/**
 * CustomTitle component for displaying a custom title image.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} props.url - The URL of the custom title image.
 * @returns {JSX.Element} The CustomTitle component JSX.
 */

function CustomTitle({ url }) {
  return <img src={url} className="custom_title" alt="Custom Title" />;
}

export default CustomTitle;
