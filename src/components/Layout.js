import React, { useState, useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import Socials from "./Socials";
import MouseSpotlight from "./MouseSpotlight";

const lightTheme = {
  background: "#f1faee",
  primary: "#457b9d",
  secondary: "#e63946",
  extra: "#e63946",
  lightExtra: "#a8dadc",
};

const darkTheme = {
  background: "#050224",
  primary: "white",
  secondary: "#4affff",
  extra: "#AEA8BA",
  lightExtra: "rgba(174, 168, 186, 0.2)",
};

function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  // useEffect(() => {
  //   // Check if the system prefers dark mode
  //   const prefersDarkMode = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   setIsDarkMode(prefersDarkMode);
  // }, []);
  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MouseSpotlight isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} />
      <Socials />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
