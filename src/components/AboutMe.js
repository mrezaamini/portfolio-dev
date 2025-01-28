import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";

function AboutMe() {
  return (
    <AboutMeContainer id="about">
      <AboutMeContent>
        <SectionHeader number="01" title="About me." Rwing ori="flex-start" />
        <AboutMeGrid>
          <AboutMeLeft>
            <AboutMeText>
              <p>
                As a tech enthusiast, I'm driven by the exciting challenges that
                come with merging innovation and functionality. This portfolio
                reflects my passion for creating impactful solutions that
                resonate with fellow developers and tech enthusiasts. Join me on
                this journey, as we delve into the world of cutting-edge
                technology and inventive designs. Together, we can bring fresh
                perspectives to the tech landscape and make a difference!
              </p>
            </AboutMeText>
            <AboutMeInterests>
              <InterestItem>
                <p>Human-Computer Interaction</p>
              </InterestItem>
              <InterestItem>
                <p>Applied AI</p>
              </InterestItem>
              <InterestItem>
                <p>IoT</p>
              </InterestItem>
              <InterestItem>
                <p>Software Development</p>
              </InterestItem>
            </AboutMeInterests>
          </AboutMeLeft>
          <AboutMeRight>
            {/* <AboutMePic></AboutMePic> */}
            <AboutMeEducation>
              <EducationItem>
                <p> Bsc. Computer Engineering</p>
                <a href="https://en.sbu.ac.ir/" target="_blank">
                  Shahid Beheshti University
                </a>
              </EducationItem>
              <EducationItem>
                <p>Master of Applied Computer Science Student</p>
                <a href="https://www.concordia.ca/" target="_blank">
                  Concordia University
                </a>
              </EducationItem>
            </AboutMeEducation>
          </AboutMeRight>
        </AboutMeGrid>
      </AboutMeContent>
    </AboutMeContainer>
  );
}

export default AboutMe;

const AboutMeContainer = styled.div`
  margin-bottom: 10vh;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AboutMeContent = styled.div`
  width: 70vw;
`;

const AboutMeGrid = styled.div`
  width: 70vw;
  justify-content: space-between;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const AboutMeLeft = styled.div`
  flex: 0.45;
  display: flex;
  flex-direction: column;
`;

const AboutMeRight = styled.div`
  flex: 0.45;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    order: -1;
  }
`;

const AboutMeText = styled.div`
  text-align: justify;
`;

const AboutMeInterests = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const InterestItem = styled.div`
  border-radius: 50px;
  justify-content: center;
  margin: 5px;
  z-index: 11;
  text-align: center;
  background-color: rgba(174, 168, 186, 0.2);
  width: fit-content;
  padding: 5px 20px;
  letter-spacing: normal;
  transition: color 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    > p {
      color: ${(props) => props.theme.background};
    }
  }

  > p {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-size: clamp(0.7rem, 0.8vw, 1rem);
    color: ${(props) => props.theme.extra};
  }
`;
const AboutMePic = styled.div`
  height: 12vw;
  width: 12vw;
  background-color: lightblue;
  opacity: 10%;
  margin-left: auto;
  margin-right: auto;
`;
const AboutMeEducation = styled.div`
  position: relative;
  padding: 0px 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  z-index: 50;
  &:before {
    content: "";
    width: 1px;
    background: linear-gradient(
      0deg,
      rgba(174, 168, 186, 0) 0%,
      rgba(174, 168, 186, 1) 5%,
      rgba(174, 168, 186, 1) 95%,
      rgba(174, 168, 186, 0) 100%
    );
    height: 100%;
    position: absolute;
    top: 0;
    left: 7px;
  }
`;

const EducationItem = styled.div`
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  > p {
    color: ${(props) => props.theme.extra};
    transition: color 0.3s ease-in-out;
  }
  > a {
    text-decoration: none;
    color: ${(props) => props.theme.extra};
    letter-spacing: normal;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-size: clamp(0.7rem, 0.8vw, 1rem);
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    > a {
      color: ${(props) => props.theme.secondary};
    }
    > p {
      color: ${(props) => props.theme.secondary};
    }
    &:before {
      background-color: ${(props) => props.theme.secondary};
    }
  }

  &:before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.extra};
    transition: background-color 0.3s ease-in-out;

    position: absolute;
    top: 10px;
    left: -28px;
  }
`;
