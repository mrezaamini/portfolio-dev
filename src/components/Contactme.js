import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";

function ContactMe() {
  return (
    <ContactMeContainer id="contact">
      <ContactMeContent>
        <SectionHeader number="03" title="Contact." Rwing ori="flex-start" />
        <ContactMeGrid>
          <ContactMeInfo>
            <p>
              I'm always eager to connect with fellow tech enthusiasts and
              professionals. I welcome the opportunity to tackle novel
              challenges and embark on creative endeavors. Reach out to me for
              project discussions and collaborations.
            </p>
          </ContactMeInfo>
          <ContactMeButton>
            <p>Let's turn ideas into reality</p>
            <a href="mailto:mreza.amini@outlook.com">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Get in touch
            </a>
          </ContactMeButton>
        </ContactMeGrid>
        <ContactMeFooter>
          <p>2023 &copy; Mohammadreza Amini - All Rights Reserved</p>
        </ContactMeFooter>
      </ContactMeContent>
    </ContactMeContainer>
  );
}

export default ContactMe;

const ContactMeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContactMeContent = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
`;

const ContactMeInfo = styled.div`
  flex: 0.5;
  > p {
    line-height: 1.7;
    color: ${(props) => props.theme.primary};
    text-align: justify;
    @media (max-width: 768px) {
      line-height: normal;
    }
  }
`;

const ContactMeButton = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    text-align: center;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    letter-spacing: normal;
    color: ${(props) => props.theme.secondary};
    font-size: clamp(0.7rem, 2vw, 1rem) !important;
  }

  > a {
    margin: auto;
    z-index: 100;
    margin-top: 15px;
    cursor: pointer;
    width: fit-content;
    letter-spacing: normal;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-size: clamp(0.7rem, 2vw, 1rem) !important;
    position: relative;
    display: inline-block;
    padding: 10px 15px;
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
    text-decoration: none;
    font-size: 24px;
    overflow: hidden;
    transition: 0.2s;
    border: solid 1px ${(props) => props.theme.extra};

    &:hover {
      color: ${(props) => props.theme.background};
      border: solid 1px ${(props) => props.theme.secondary};
      background: ${(props) => props.theme.secondary};
      box-shadow: 0 0 0 1px ${(props) => props.theme.secondary},
        0 0 10px ${(props) => props.theme.secondary},
        0 0 200px ${(props) => props.theme.secondary};
      transition-delay: 1s;

      > span:nth-child(1) {
        transition: 1s;
        left: 100%;
      }

      > span:nth-child(2) {
        transition: 1s;
        top: 100%;
        transition-delay: 0.25s;
      }

      > span:nth-child(4) {
        transition: 1s;
        bottom: 100%;
        transition-delay: 0.75s;
      }

      > span:nth-child(3) {
        transition: 1s;
        right: 100%;
        transition-delay: 0.5s;
      }
    }

    > span {
      position: absolute;
      display: block;
    }

    > span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        ${(props) => props.theme.secondary}
      );
    }

    > span:nth-child(2) {
      right: 0;
      top: -100%;
      height: 100%;
      width: 1px;
      background: linear-gradient(
        180deg,
        transparent,
        ${(props) => props.theme.secondary}
      );
    }

    > span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        270deg,
        transparent,
        ${(props) => props.theme.secondary}
      );
    }

    > span:nth-child(4) {
      left: 0;
      bottom: -100%;
      height: 100%;
      width: 1px;
      background: linear-gradient(
        360deg,
        transparent,
        ${(props) => props.theme.secondary}
      );
    }
  }

  @media (max-width: 960px) {
    margin-top: 30px;
  }
`;

const ContactMeGrid = styled.div`
  margin-top: 5vh;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ContactMeFooter = styled.div`
  justify-self: flex-end;
  margin-top: 15vh;
  margin-bottom: 20px;
  > p {
    text-align: center;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    letter-spacing: normal;
    color: ${(props) => props.theme.extra};
    font-size: 12px !important;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
