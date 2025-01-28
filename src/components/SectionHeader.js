import React, { useEffect } from "react";
import styled from "styled-components";

function SectionHeader({ number, title, Lwing, Rwing, ori }) {
  return (
    <SectionHeaderContainer ori={ori}>
      {Lwing && <HorizontalLine></HorizontalLine>}
      <SectionNum ori={ori}>{number}</SectionNum>
      <SectionName ori={ori}>{title}</SectionName>
      {Rwing && <HorizontalLine></HorizontalLine>}
    </SectionHeaderContainer>
  );
}

export default SectionHeader;

const SectionHeaderContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.ori};
  margin: calc(clamp(3.8rem, 11vw, 7rem) / 1.5) 0;
  position: relative;
  align-items: center;
`;

const SectionName = styled.h2`
  font-size: clamp(1.2rem, 4vw, 3rem);
  padding-left: ${(props) => (props.ori === "flex-start" ? "2vw" : "")};
  padding-right: ${(props) => (props.ori === "flex-end" ? "2vw" : "")};
  z-index: 1;
  margin: 0;
`;

const SectionNum = styled.h1`
  position: absolute;
  margin-left: 0;
  left: ${(props) =>
    props.ori === "center" ? "50%" : props.ori === "flex-end" ? "100%" : "0"};
  top: 50%;
  transform: translate(
    ${(props) =>
      props.ori === "center"
        ? "-50%"
        : props.ori === "flex-end"
        ? "-100%"
        : "0"},
    -50%
  );
  opacity: 0.5;
  color: transparent;
  -webkit-text-stroke: 1px ${(props) => props.theme.extra};
  /* text-stroke: 1px ${(props) => props.theme.extra}; */
  font-size: clamp(3.8rem, 11vw, 7rem);
`;

const HorizontalLine = styled.div`
  width: 25vw;
  align-self: end;
  margin-bottom: 6px;
  margin-left: 8px;
  margin-right: 8px;
  height: 1px;
  background-color: ${(props) => props.theme.extra};
  opacity: 0.5;
`;
