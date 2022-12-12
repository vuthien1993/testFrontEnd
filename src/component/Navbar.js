import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [display, setDisplay] = useState(true);
  const clickHandler = () => {
    setDisplay(!display);
  };
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDisplay(true);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <React.Fragment>
      {display && (
        <div className="displayMobile" onClick={clickHandler}>
          <svg
            class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
            fill="currentColor"
            aria-hidden="true"
            width="30"
            height="30"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h15a.5.5 0 000-1h-15z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      )}
      <div
        className={`${display ? "backGroundNavbar" : "backGroundNavbarM"}`}
        ref={wrapperRef}
      >
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
