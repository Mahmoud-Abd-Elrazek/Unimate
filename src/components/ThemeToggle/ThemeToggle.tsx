// import React from "react";
import "./ThemeToggle.css"; // Import styles if needed

const ThemeToggle = () => {
  return (
    <label className="theme-toggle" title="Toggle theme">
      <input type="checkbox" />
      <span className="theme-toggle-sr">Toggle theme</span>
      <svg
        aria-hidden="true"
        width=" 1.875rem"
        height=" 1.875rem"
        fill="#1f2937"
        className="theme-toggle__around"
        viewBox="0 0 32 32"
      >
        <clipPath id="theme-toggle__around__cutout">
          <path d="M0 0h42v30a1 1 0 00-16 13H0Z" />
        </clipPath>
        <g clipPath="url(#theme-toggle__around__cutout)">
          <circle cx="16" cy="16" r="8.4" />
          <g>
            <circle cx="16" cy="3.3" r="2.3" />
            <circle cx="27" cy="9.7" r="2.3" />
            <circle cx="27" cy="22.3" r="2.3" />
            <circle cx="16" cy="28.7" r="2.3" />
            <circle cx="5" cy="22.3" r="2.3" />
            <circle cx="5" cy="9.7" r="2.3" />
          </g>
        </g>
      </svg>
    </label>
  );
};

export default ThemeToggle;
