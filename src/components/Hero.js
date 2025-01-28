import React from "react";
import styled, { keyframes } from "styled-components";
import ArrowDownIcon from "./Icons/arrowDown";

function Hero() {
  const buttonString = "REACH OUT & SAY HI - REACH OUT & SAY HI - ";
  const buttonChars = [...buttonString];
  return (
    <HeroContainer>
      <h1>Mohammadreza Amini</h1>
      <h2>Building the Future with a Creative Touch.</h2>
      <p>
        I'm a computer engineer with a strong devotion to design, creative
        problem-solving, and business ventures.
      </p>
      <ContactButton>
        <LinkToContact>
          <a href="#contact"></a>
          <ArrowDownIcon />
        </LinkToContact>

        <CircularText>
          {buttonChars.map((char, i) => {
            return (
              <span style={{ transform: `rotate(${i * 8.6}deg)` }} key={i}>
                {char}
              </span>
            );
          })}
        </CircularText>
      </ContactButton>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4vh;
  width: 100%;
  text-align: center;

  > p {
    width: 70vw;
    margin-top: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.extra};
  }

  > h2 {
    font-size: clamp(0.8rem, 12vw, 4rem);
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.extra};
    @media (max-height: 590px) {
      width: 85vw;
    }
  }

  > h3 {
    margin-bottom: 15px;
  }
`;

const ContactButton = styled.div`
  margin-top: 15vh;
  position: relative;
  cursor: pointer;
  z-index: 10;
  width: 135px;
  height: 135px;
  border-radius: 50%;
  @media (max-height: 590px) {
    margin-top: 2vh;
  }

  > a {
    z-index: 2000;
  }
`;
const rotateText = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const CircularText = styled.div`
  animation: ${rotateText} 20s linear infinite;
  transform-origin: center;
  /* transition: animation 0.3s ease-in-out; */
  /* 
  &:hover {
    animation: ${rotateText} 2s linear infinite;
  } */

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  > span {
    position: absolute;
    color: ${(props) => props.theme.primary};
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    font-weight: 300;
    top: 0;
    left: 50%;
    transform-origin: 0 68px;
    @media (max-height: 520px) {
      display: none;
    }
  }
`;

const LinkToContact = styled.div`
  position: absolute;
  top: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 68px;
  color: ${(props) => props.theme.secondary};
  border-radius: 50%;
  height: 150px;
  width: 150px;
  transform: translate(-50%, -50%);
  z-index: 10;
  > a {
    z-index: 11;
    position: absolute;
    width: 100px;
    height: 100px;
  }
`;
