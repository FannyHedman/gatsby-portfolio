import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { textColor } from "../css/colors"
import OptimizedSvg from "../images/Avatar-Maker.svg"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql } from "gatsby"

const HomeTemplate = ({ content, title, image }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContactInformation {
        edges {
          node {
            id
            contactImage {
              gatsbyImage(width: 600)
            }
            contactLinks {
              raw
            }
            contactText
            title
          }
        }
      }
    }
  `)
  return (
    <main>
      <div>
        <PagePresentation>
          {/* <motion.div
            initial={{ rotate: 175, scale: 1 }}
            animate={{ rotate: 180, scale: -1 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 10,
            }}
          > */}
          <PageTitle>{title}!</PageTitle>
          {/* </motion.div> */}
          <PageDescriptionContainer>
            <motion.div
              initial={{ rotate: 165, scale: -1 }}
              animate={{ rotate: 180, scale: -1 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 10,
              }}
            >
              <PageDescription>
                {documentToReactComponents(JSON.parse(content.raw))}
              </PageDescription>
            </motion.div>
          </PageDescriptionContainer>
        </PagePresentation>
        <PageContent>
          <ProjectContainer>
            <StyledRow>
              <CardContainer>
                <PinkFilteredImage
                  alt={image.description}
                  image={image.gatsbyImageData}
                />
                <Card>
                  {data.allContentfulContactInformation.edges.map(
                    ({ node }) => (
                      <CardDiv key={node.id}>
                        <CardHeading>{node.title}</CardHeading>
                        <CardText>{node.contactText}</CardText>
                        <CardList>
                          <CardListItem>
                            {documentToReactComponents(
                              JSON.parse(node.contactLinks.raw)
                            )}
                          </CardListItem>
                        </CardList>
                      </CardDiv>
                    )
                  )}
                </Card>
              </CardContainer>
              <ThreeDivsContainer>
                <StyledDiv>
                  <StyledUl>
                    <motion.li
                      className="circle"
                      initial={{ y: -500 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      JavaScript
                    </motion.li>
                    <motion.li
                      className="tube-right"
                      initial={{ x: 500 }}
                      animate={{ x: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      PHP
                    </motion.li>{" "}
                    <motion.li
                      className="circle"
                      initial={{ y: 500, x: 500 }}
                      animate={{ y: -0, x: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      React
                    </motion.li>
                  </StyledUl>
                </StyledDiv>
                <StyledDiv>
                  <StyledUl>
                    <motion.li
                      className="tube-left"
                      initial={{ x: 500 }}
                      animate={{ x: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      Express
                    </motion.li>{" "}
                    <motion.li
                      className="circle"
                      initial={{ y: -500, x: 500 }}
                      animate={{ y: 0, x: 0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      Bootstrap
                    </motion.li>
                    <motion.li
                      className="tube-right"
                      initial={{ y: 500 }}
                      animate={{ y: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      Node.js
                    </motion.li>{" "}
                  </StyledUl>
                </StyledDiv>
                <StyledDiv>
                  <StyledUl>
                    <motion.li
                      className="circle"
                      initial={{ y: 500 }}
                      animate={{ y: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      CSS
                    </motion.li>{" "}
                    <motion.li
                      className="tube-right"
                      initial={{ x: 500 }}
                      animate={{ x: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      Git
                    </motion.li>
                    <motion.li
                      className="circle"
                      initial={{ y: -500 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      Vue.js
                    </motion.li>
                  </StyledUl>
                </StyledDiv>
                <StyledDiv>
                  <StyledUl>
                    <motion.li
                      className="tube-right"
                      initial={{ y: -500 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      Wordpress
                    </motion.li>{" "}
                    <motion.li
                      className="circle"
                      initial={{ y: 500 }}
                      animate={{ y: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      Gatsby
                    </motion.li>{" "}
                    <motion.li
                      className="tube-left"
                      initial={{ x: 500 }}
                      animate={{ x: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      PostgreSQL
                    </motion.li>{" "}
                  </StyledUl>
                </StyledDiv>
                <StyledDiv>
                  <StyledUl>
                    <motion.li
                      className="circle"
                      initial={{ x: 500 }}
                      animate={{ x: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      HTML
                    </motion.li>{" "}
                    <motion.li
                      className="tube-right"
                      initial={{ y: -500 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      Docker
                    </motion.li>{" "}
                    <motion.li
                      className="circle"
                      initial={{ y: 500 }}
                      animate={{ y: -0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                    >
                      TypeScript
                    </motion.li>{" "}
                  </StyledUl>
                </StyledDiv>
                {/* Repeat the above structure for two more divs */}
              </ThreeDivsContainer>
            </StyledRow>
          </ProjectContainer>
        </PageContent>
      </div>
    </main>
  )
}

export default HomeTemplate

const PagePresentation = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 100px auto 50px auto;
  padding: 20px;

  /* Ipad */
  @media (max-width: 991px) {
    font-size: 28px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    margin: 100px auto 0px auto;
  }
`

const PageTitle = styled.h1`
  font-family: "Rubik Doodle Shadow", system-ui;
  font-size: 72px;
  color: ${textColor};

  @media (max-width: 991px) {
    font-size: 64px;
    margin-left: 5%;
  }
`

const PageDescriptionContainer = styled.div`
  margin-top: 20px;
  margin-left: 40%;
`

const PageDescription = styled.p`
  font-family: "Caprasimo", serif;
  font-size: 28px;
  color: #e73c35;

  /* Ipad */
  @media (max-width: 991px) {
    font-size: 28px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    font-size: 18px;
    font-weight: bold;
  }
`

const PageContent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20%;

  /* Ipad */
  @media (max-width: 991px) {
  }

  /* Mobile */
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`

const ProjectContainer = styled.div`
  max-width: 900px;
  width: 100%;
`

const StyledRow = styled.div`
  display: flex;
`

const CardContainer = styled.div`
  width: 50%;
  max-width: 100%;
  margin-left: 10%;

  /* Ipad */
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }

  /* Mobile */
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`

const ThreeDivsContainer = styled.div`
  display: flex;
  width: 50%;
  max-width: 100%;

  /* Ipad */
  @media (max-width: 991px) {
    width: 100%;
  }

  /* Mobile */
  @media (max-width: 767px) {
    width: 100%;
  }
`

const StyledDiv = styled.div`
  flex: 1;
  /* margin: 2rem; */
`

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 20%;
`

const StyledLi = styled.li`
  /* margin: 10px 0;
  padding: 10px;
  width: auto;
  background-color: white;
  border-radius: 20px; */
`

const PinkFilteredImage = styled(GatsbyImage)`
  /* Add the following styles for positioning */
  position: absolute;
  /* bottom: 0;
  left: 0; */
  width: 300px;
  transform: rotate(-8deg);
  transition: transform 0.5s ease; /* Default transition for slower effect */
  &:hover {
    transform: rotate(-5deg); /* Rotate in the opposite direction */
    transition: transform 0.3s ease; /* Add a smooth transition effect */
  }
`

const Card = styled.div`
  /* Add the following styles for positioning */
  position: relative;
  z-index: 1; /* Make sure Card is above PinkFilteredImage */
  margin-top: 65%; /* Adjust this value as needed */
  width: 200px;
  margin-left: -28%; /* Adjust this value to stretch towards the right */
  height: 250px;
  background-color: rgba(252, 253, 205, 1);
  /* border: 4px solid #99c3ff; */
  border: 1px solid rgb(148, 205, 251);
  border-radius: 5px;
  /* box-shadow: 10px 10px 7px -5px rgba(0, 0, 0, 0.3); */
  /* box-shadow: 5px 5px 0px #b0d0ff, 10px 10px 0px #c0daff; */
  box-shadow: 6px 6px 0px rgb(148, 205, 251);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`
const CardDiv = styled.div`
  margin: 10%;
`

const CardHeading = styled.h5`
  font-family: "Rubik Doodle Shadow", system-ui;
  font-size: 18px;
  color: rgb(148, 205, 251);
`

const CardText = styled.p`
  color: rgb(148, 205, 251);
`

const CardList = styled.ul`
  list-style-type: none;
`

const CardListItem = styled.li`
  text-decoration: none;
  color: black;
  a {
    color: rgb(148, 205, 251);
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`
