import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <React.Fragment>
      <div className="backGroundNavbar">
        <div>
          <span>Home</span>
        </div>
        <div>
          <span>Services</span>
        </div>
        <div>
          <span>News</span>
        </div>
        <div>
          <span>Blog</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
