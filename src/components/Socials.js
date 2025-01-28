import React from "react";
import styled from "styled-components";
import GithubIcon from "./Icons/github";
import LinkedInIcon from "./Icons/linkedin";
import InstageamIcon from "./Icons/instagram";

function Socials() {
  return (
    <SocialsContainer>
      <LeftSection>
        <SocialLink>
          <a href="https://github.com/mrezaamini" target="_blank">
            <GithubIcon />
          </a>
        </SocialLink>
        <SocialLink>
          <a
            href="https://www.linkedin.com/in/mohammadreza-amini-15b49719a/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </SocialLink>
        <SocialLink>
          <a href="https://www.instagram.com/mrezaamini/" target="_blank">
            <InstageamIcon />
          </a>
        </SocialLink>
        <VertLine></VertLine>
      </LeftSection>
      <RightSection>
        <a href="mailto:mreza.amini@outlook.com">mreza.amini@outlook.com</a>

        <VertLine></VertLine>
      </RightSection>
    </SocialsContainer>
  );
}

export default Socials;

const SocialsContainer = styled.div`
  z-index: 10;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  bottom: 0;
  @media (max-width: 800px) {
    display: none;
  }

  @media (max-height: 450px) {
    display: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-left: 80px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  bottom: 0;

  align-items: center;
  margin-right: 80px;
  > a {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-size: 15px;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin-bottom: 15px;
    color: ${(props) => props.theme.extra};
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
      color: ${(props) => props.theme.secondary};
    }
  }
`;

const SocialLink = styled.div`
  margin-bottom: 15px;
  color: ${(props) => props.theme.extra};
  width: 25px;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  > a {
    text-decoration: none;
    color: ${(props) => props.theme.extra};
  }

  &:hover {
    color: ${(props) => props.theme.secondary};
    transform: scale(1.1);
    opacity: 1;
    > a {
      color: ${(props) => props.theme.secondary};
    }
  }
`;

const VertLine = styled.div`
  height: 100px;
  width: 2px;
  background-color: ${(props) => props.theme.extra};
  opacity: 0.5;
`;
