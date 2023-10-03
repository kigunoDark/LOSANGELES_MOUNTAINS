import React from "react";
import Logo from "../View/Logo/Logo";
import { FOOTER_COPYRIGHTS } from "./FooterConstants";
import "./Footer.css";
import "../../App.css";

/**
 * Footer component for displaying the website's footer.
 *
 * @component
 * @returns {JSX.Element} The Footer component JSX.
 */

function Footer() {
  return (
    <div className="footer">
      <div className="app_container">
        <div className="footer_content">
          <Logo showName colorTitle="#63769d" colorSubtitle="#63769d" />
          <div>{FOOTER_COPYRIGHTS}</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
