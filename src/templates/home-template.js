import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const HomeTemplate = contentfulPage => {
  return (
    <main>
      {/* <HomeTitle>{contentfulPage.title}</HomeTitle> */}
      <div>
        <PagePresentation>
          <motion.div
            initial={{ rotate: 175, scale: 1 }}
            animate={{ rotate: 180, scale: -1 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 10,
            }}
          >
            <PageTitle>Hello!</PageTitle>
          </motion.div>
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
                I'm Fanny, a Stockholm based aspiring frontend developer. I'm passionate
                about coding and creating, eager to gain professional experience
                and expand my web development skills.{" "}
              </PageDescription>
            </motion.div>
          </PageDescriptionContainer>
        </PagePresentation>
        <PageContent>
          <ProjectContainer></ProjectContainer>
        </PageContent>
      </div>
    </main>
  )
}

export default HomeTemplate

const HomeTitle = styled.h1`
  font-family: "Reenie Beanie", cursive;
  font-size: 72px;
`

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
  color: black;

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
font-family: 'Caprasimo', serif;
  font-size: 28px;

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
  align-items: center;
`

const ProjectContainer = styled.div`
  max-width: 800px;
  width: 100%;
`

const ProjectList = styled.ul`
  list-style-type: none;
`

const ListItem = styled.li`
  position: relative;
  margin: 50px;
`

const Title = styled.h2`
  position: absolute;
  top: 45%;
  left: -100px;
  z-index: 1;
  /* color: #c3193a; */

  /* Ipad */
  @media (max-width: 991px) {
    position: relative;
    left: 0;
    font-size: 22px;
    color: black;
  }

  /* Mobile */
  @media (max-width: 767px) {
    position: relative;
    left: 0;
    font-size: 16px;
    color: black;
  }
`

const ImageContainer = styled.div`
  position: relative;
`

const ProjectImage = styled(GatsbyImage)`
  max-width: 100%;
  border-radius: 8px;
`

const ImageShadow = styled.div`
  width: 600px;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(252, 229, 250, 0.8);
  /* background: rgba(252, 220, 241, 0.8); */
  /* background: rgba(102, 153, 125, 0.6); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 1;
  transition: 0.6s;

  &:hover {
    opacity: 0;
  }

  /* Ipad */
  @media (max-width: 991px) {
    display: none;
  }

  /* Mobile */
  @media (max-width: 767px) {
    display: none;
  }
`
