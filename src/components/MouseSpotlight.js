import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Spotlight = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  transform: translate(
    -50%,
    -50%
  ); /* Center the spotlight around the mouse cursor */
`;

const MouseSpotlight = ({ isDarkMode }) => {
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const laptopScreenWidth = 768;
      setShowSpotlight(window.innerWidth >= laptopScreenWidth);
      setShowSpotlight(isDarkMode);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isDarkMode]);

  useEffect(() => {
    if (showSpotlight) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showSpotlight]);

  return showSpotlight ? (
    <Spotlight
      style={{
        background: `radial-gradient(circle closest-side, rgba(9, 4, 64,0.5),transparent `,
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    />
  ) : null;
};

export default MouseSpotlight;
