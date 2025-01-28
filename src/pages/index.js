import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Work from "../components/Work";
import ContactMe from "../components/Contactme";
import { SEO } from "../components/seo";

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <Hero />
        <AboutMe />
        <Work />
        <ContactMe />
      </HomeContainer>
    </Layout>
  );
}

const HomeContainer = styled.div`
  position: absolute;
  width: 100%;
`;

export const Head = () => <SEO />;
