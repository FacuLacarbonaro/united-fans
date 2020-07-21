import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links">
        <Link className='footer_links_icon' to="/instagram">
          <button>Instagram</button>
        </Link>
        <Link  className='footer_links_icon' to="/twitter">
          <button>Twitter</button>
        </Link>
        <Link className='footer_links_icon' to="/youtube">
          <button>Youtube</button>
        </Link>
        <Link className='footer_links_icon' to="/facebok">
          <button>Facebook</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
