import React, { useState } from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import { graphql, useStaticQuery } from "gatsby";

function Work() {
  const data = useStaticQuery(graphql`
    query {
      allWorkDetailsJson {
        edges {
          node {
            title
            description
            from
            to
            company
            tags
          }
        }
      }
    }
  `);
  const workItems = data.allWorkDetailsJson.edges;
  const [selectedWork, setSelectedWork] = useState(workItems[0].node);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
  };

  return (
    <WorkContainer id="work">
      <WorkContent>
        <SectionHeader
          number="02"
          title="Experience."
          Rwing
          Lwing
          ori="center"
        />
        <WorkSelection>
          <TopSide>
            {workItems.map(({ node }) => (
              <button
                key={node.id}
                onClick={() => handleWorkClick(node)}
                className={selectedWork === node ? "selected" : ""}
              >
                {node.company}
              </button>
            ))}
          </TopSide>
          <DownSide>
            <DSSections>
              <h2>
                <span>{selectedWork.company}&gt;</span> {selectedWork.title}
              </h2>
              <h4>
                {selectedWork.from} {selectedWork.to}
              </h4>
            </DSSections>
            <p>{selectedWork.description}</p>
            <WorkTags>{selectedWork.tags}</WorkTags>
          </DownSide>
        </WorkSelection>
      </WorkContent>
    </WorkContainer>
  );
}

export default Work;

const WorkContainer = styled.div`
  margin-bottom: 10vh;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const WorkContent = styled.div`
  width: 70vw;
`;

const DownSide = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  > h3 {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-size: clamp(0.7rem, 0.8vw, 1rem);
    color: ${(props) => props.theme.primary};
  }
  > p {
    margin-bottom: 10px;
    line-height: 1.7;

    margin-top: 15px;
    color: ${(props) => props.theme.primary};
    text-align: justify;
    @media (max-width: 768px) {
      line-height: normal;
    }
  }
`;

const TopSide = styled.div`
  display: flex;
  margin: auto;
  z-index: 12;
  flex-wrap: wrap;
  justify-content: center;

  > button {
    text-align: center;
    padding: 5px 20px;
    letter-spacing: normal;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    background-color: transparent;
    font-size: clamp(0.7rem, 0.8vw, 1rem);
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.extra};
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
      color 0.3s ease-in-out;

    &.selected {
      color: ${(props) => props.theme.secondary};
      border-color: ${(props) => props.theme.secondary};
      border-bottom: 2px solid;
    }

    cursor: pointer;
    outline: none;

    &:hover {
      background-color: ${(props) => props.theme.lightExtra};
    }
  }
`;

const WorkSelection = styled.div`
  display: flex;
  flex-direction: column;
  /* width: max-content; */
  justify-content: center;
  width: 90%;
  max-width: 700px;
  margin: auto;
`;

const DSSections = styled.div`
  display: flex;
  justify-content: space-between;
  > h2 {
    margin-bottom: 10px;
    flex: 0.7;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-size: clamp(0.5rem, 3.5vw, 1rem);
    letter-spacing: 0.1rem;
    margin-left: 0;
    line-height: 1.5;
    color: ${(props) => props.theme.primary};
    > span {
      color: ${(props) => props.theme.secondary};
      font-weight: 500;
      font-family: "IBM Plex Mono", monospace;
    }
  }

  > h4 {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    text-align: right;
    flex: 0.3;
    font-size: clamp(0.7rem, 0.8vw, 1rem);
    color: ${(props) => props.theme.extra};
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    > h4 {
      text-align: left;
    }
  }
`;

const WorkTags = styled.p`
  font-family: "IBM Plex Mono", monospace;
  font-weight: 300;
  font-size: clamp(0.7rem, 0.8vw, 1rem) !important;
  color: ${(props) => props.theme.extra} !important;
  margin-top: 5px;
`;
