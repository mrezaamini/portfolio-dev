import React, { useState } from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import { graphql, useStaticQuery } from "gatsby";

function Publications() {
  const data = useStaticQuery(graphql`
    query {
      allPublicationsJson {
        edges {
          node {
            title
            authors
            journal
            year
            description
            url
            tags
          }
        }
      }
    }
  `);

  const publications = data.allPublicationsJson.edges;

  return (
    <PubContainer id="publications">
      <PubContent>
        <SectionHeader
          number="03"
          title="Publications."
          Rwing
          ori="flex-start"
        />
        <PubList>
          {publications.map(({ node }, index) => (
            <PubItem key={index}>
              <PubTitle>{node.title}</PubTitle>
              <PubAuthors>
                <strong>Authors:</strong> {node.authors.join(", ")}
              </PubAuthors>
              <PubDetails>
                <span>
                  <strong>Journal:</strong> {node.journal} ({node.year})
                </span>
              </PubDetails>
              <PubDescription>{node.description}</PubDescription>
              <PubLinks>
                <a href={node.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </PubLinks>
              <PubTags>
                {node.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </PubTags>
            </PubItem>
          ))}
        </PubList>
      </PubContent>
    </PubContainer>
  );
}

export default Publications;

/* Styles */
const PubContainer = styled.div`
  margin-bottom: 10vh;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PubContent = styled.div`
  width: 70vw;
`;

const PubList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const PubItem = styled.li`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const PubTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
`;

const PubAuthors = styled.p`
  font-size: 0.95rem;
  color: #34495e;
  margin: 0.25rem 0;
`;

const PubDetails = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0.25rem 0;
`;

const PubDescription = styled.p`
  font-size: 0.95rem;
  color: #2c3e50;
  margin: 0.5rem 0;
`;

const PubLinks = styled.div`
  margin-top: 0.5rem;

  a {
    font-size: 0.9rem;
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PubTags = styled.div`
  margin-top: 0.75rem;

  span {
    display: inline-block;
    background-color: #ecf0f1;
    color: #7f8c8d;
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    border-radius: 16px;
    margin-right: 0.5rem;
  }
`;

const Tag = styled.span``;
