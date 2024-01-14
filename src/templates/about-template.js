// import * as React from 'react'
// import styled from 'styled-components';
// import { GatsbyImage } from "gatsby-plugin-image"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// const AboutTemplate = ({content, title, image}) => {
//   return (
//     <main>
//       <div style={{marginTop: '100px'}}>
//       <AboutTitle>{title}</AboutTitle>
//       <TextDiv className="about-content">
//         {documentToReactComponents(JSON.parse(content.raw))}
//       </TextDiv>
//       {<AboutImage alt={image.description}
//           image={image.gatsbyImageData}></AboutImage>}
//       </div>
//     </main>
//   )
// }

// export default AboutTemplate;

// const AboutTitle = styled.h2`
//   font-family: "Rubik Doodle Shadow", system-ui;
//   font-size: 64px;
//   color: red;
// `

// const TextDiv = styled.div`
//   /* font-family: "Rubik Doodle Shadow", system-ui; */
//   width: 400px;

// `
// const AboutImage = styled(GatsbyImage)`
//   max-width: 100%;
//   /* border-radius: 8px; */
//   transform: rotate(5deg);
// `

import * as React from "react"
import styled from "styled-components"
import {textColor} from '../css/colors'
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { motion } from "framer-motion"


const AboutTemplate = ({ content, title, image }) => {
  return (
    <main>
      <Container>
        <AboutTitle>{title}</AboutTitle>
        <ContentContainer>
          <LeftDiv>
          <TextDiv className="about-content">
            {documentToReactComponents(JSON.parse(content.raw))}
          </TextDiv>
          </LeftDiv>
          <RightDiv>
          <motion.div
          initial={{ rotate: 165, scale: -1 }}
          animate={{ rotate: 180, scale: -1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 10,
          }}
        >
          <AboutImage
            alt={image.description}
            image={image.gatsbyImageData}
          ></AboutImage>
          </motion.div>
          </RightDiv>
        </ContentContainer>
      </Container>
    </main>
  )
}

export default AboutTemplate

const Container = styled.div`
  /* margin-top: 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AboutTitle = styled.h2`
  font-family: "Rubik Doodle Shadow", system-ui;
  font-size: 64px;
  color: #E73C35;
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
        margin-left: 60%;
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
  font-family: 'DM Serif Display', serif;
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
    max-width: 400px;
    margin-right: 10%;

    /* Ipad */
    @media (max-width: 991px) {
        flex: auto;
        margin-right: 0;
        margin-top: 0;
        text-align: center;
        max-width: 500px;
    }

    @media (max-width: 767px) {
        flex: auto;
        text-align: center;
        max-width: 50%;
    }
`

const AboutImage = styled(GatsbyImage)`
  /* width: 48%;  */
  /* border-radius: 8px; */
  transform: rotate(5deg);
  transition: transform 0.5s ease; /* Default transition for slower effect */
  /* padding: 20px; */
  margin-left: 20%;
  &:hover {
    transform: rotate(-5deg); /* Rotate in the opposite direction */
    transition: transform 0.3s ease; /* Add a smooth transition effect */
  }

`
