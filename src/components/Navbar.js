import React from "react";
import styled from "styled-components";
import Logo from "./Icons/logo";

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <NavbarContainer>
      <LeftSection>
        <LogoContainer onClick={toggleDarkMode}>
          <Logo darkMode={isDarkMode} h="50px" w="100px" />
        </LogoContainer>
      </LeftSection>

      <Menu>
        <a href="#about">
          <span>01.</span> about
        </a>
        <a href="#work">
          <span>02.</span> work
        </a>
        <a href="#contact">
          <span>03.</span> contact me
        </a>
      </Menu>
      <RightSection>
        <a href="/mrezaamini-cv.pdf" target="_blank">
          <DownloadButton>Download CV</DownloadButton>
        </a>
      </RightSection>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

const LeftSection = styled.div`
  z-index: 1;
  display: flex;
  margin-top: 10px;
  flex: 0.2;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const Menu = styled.div`
  display: flex;
  z-index: 1;
  flex: 0.6;
  justify-content: center;
  align-items: center;
  > a {
    position: relative;
    margin: 0 30px;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-size: 15px;
    color: ${(props) => props.theme.extra};
    transition: color 0.3s ease-in-out;
    cursor: pointer;
  }

  > a:hover {
    color: ${(props) => props.theme.primary};
  }

  > a::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    transform: scaleX(0);
    background-color: ${(props) => props.theme.primary};
    transition: transform 300ms ease-in-out;
  }

  > a:hover::before,
  a:focus::before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  z-index: 1;
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div``;

const DownloadButton = styled.button`
  position: relative;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.extra};
  color: ${(props) => props.theme.extra};
  padding: 10px 15px;
  z-index: 1;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 300;
  font-size: 15px;
  display: inline-block;
  font-size: 15px;

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: ${(props) => props.theme.secondary};
    transition: transform 0.3s ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:hover::before,
  &:focus::before {
    transform: scaleX(1);
  }

  & {
    transition: color 0.3s ease-in-out;
    z-index: 1;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.background};
  }
`;

export default Navbar;
