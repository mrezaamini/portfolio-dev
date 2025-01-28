import React from "react";

const Logo = ({ darkMode, h, w }) => (
  <svg
    width={w}
    height={h}
    viewBox="100 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 16C70 36.1667 195 65 255 52C315 39 354 19.8333 365 16C352.333 38.8333 333.5 55 320.5 116C307.5 177 320.5 197 320.5 197C320.5 197 340 138.5 365 97C390 55.5 401.333 46 411 36C408 53 400.961 84.5761 399 116C397.03 147.571 400.667 179.667 401 197C410.333 177.333 415 153 447 105C479 57 502 36 502 36C502 36 481.207 108.282 475.5 155.5C469.567 204.591 473 244 473 244"
      stroke={darkMode ? "#AEA8BA" : "black"}
      stroke-width="30"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {/* <circle cx="550" cy="206" r="20" fill="white" /> */}
  </svg>
);

export default Logo;
