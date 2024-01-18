import * as React from "react"
import { graphql, Link } from "gatsby"
// import {renderRichText} from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import { motion } from "framer-motion"

export const query = graphql`
  query ($slug: String!) {
    contentfulPosts(slug: { eq: $slug }) {
      title
      description {
        description
      }
      heroImage {
        gatsbyImage(width: 700)
      }
    }
  }
`

const portfolioItem = props => {
  return (
    <Layout>
      <Container>
        {/* <motion.div
          initial={{ rotate: 175, scale: -1 }}
          animate={{ rotate: 180, scale: -1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 10,
          }}
        > */}
        <AboutTitle>{props.data.contentfulPosts.title}</AboutTitle>
        {/* </motion.div> */}

        <ContentContainer>
          <LeftDiv>
            <TextDiv className="about-content">
              {props.data.contentfulPosts.description.description}
            </TextDiv>
          </LeftDiv>
          <RightDiv>
            <AboutImage
              image={props.data.contentfulPosts.heroImage.gatsbyImage}
              alt={props.data.contentfulPosts.title}
            ></AboutImage>
          </RightDiv>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export default portfolioItem

const Container = styled.div`
  /* margin-top: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1800px; */
`

const AboutTitle = styled.h2`
  font-family: "Rubik Doodle Shadow", system-ui;
  font-size: 64px;
  color: #e73c35;

  /* Ipad */
  @media (max-width: 991px) {
    font-size: 36px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    /* margin: 100px auto 0px auto; */
    font-size: 28px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  width: 100%;
  height: auto;

  /* Desktop */
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    width: 90%;
    margin-left: 5%;
  }
`

const LeftDiv = styled.div`
  flex: 1;
  max-width: 400px;
  margin-left: 10%;

  /* Ipad */
  @media (max-width: 991px) {
        flex: auto;
        margin-left: 0;
        text-align: center;
        max-width: 100%;
    }
/* Mobile */
    @media (max-width: 767px) {
        flex: auto;
        margin-left: 10%;
        margin-bottom: 0;
        text-align: center;
        max-width: 100%;
    }
`

const TextDiv = styled.div`
  /* width: 48%;  */
  font-family: "DM Serif Display", serif;
  color: black;

  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 20px;

  @media (max-width: 767px) {
    width: 80%;
  }
`

const RightDiv = styled.div`
  flex: 1;
  max-width: 900px;
  margin-right: 10%;

  /* Ipad */
  @media (max-width: 991px) {
        flex: auto;
        margin-right: 0;
        margin-top: 0;
        text-align: center;
        max-width: 500px;
    }

    /* Mobile */
    @media (max-width: 767px) {
        flex: auto;
        text-align: center;
        max-width: 50%;
    }
`

const AboutImage = styled(GatsbyImage)`
  /* width: 48%;  */
  border-radius: 8px;
  /* transform: rotate(5deg); */
  /* padding: 20px; */
  margin-left: 20%;


  /* Ipad */
  @media (max-width: 991px) {
        margin-left: 0;
        /* width: 70%; */
    }
/* Mobile */
    @media (max-width: 767px) {
        margin-left: 0;

    }
`
