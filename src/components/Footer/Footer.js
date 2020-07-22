import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/manchesterunited/"
        >
          <InstagramIcon
            className="footer_links_icon"
            style={{ fontSize: 35 }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ManUtd"
        >
          <TwitterIcon className="footer_links_icon" style={{ fontSize: 35 }} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/manutd"
        >
          <YouTubeIcon className="footer_links_icon" style={{ fontSize: 35 }} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/manchesterunited"
        >
          <FacebookIcon
            className="footer_links_icon"
            style={{ fontSize: 35 }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
