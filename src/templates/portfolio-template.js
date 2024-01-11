import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
// import * as React from "react"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { motion } from 'framer-motion'


import Layout from "../components/layout"


import useAllBlogPosts from '../hooks/use-all-blog-posts';

const BlogTemplate = (contentfulPage) => {

    const data = useStaticQuery(graphql`
    query {
      allContentfulPosts(sort: { updatedAt: ASC }) {
        edges {
          node {
            title
            description {
              description
            }
            heroImage {
              gatsbyImage(width: 600)
            }
            slug
          }
        }
      }
    }
  `)

  return (
    <div>
      <PagePresentation>
      <motion.div
          initial={{ rotate: -180, scale: 1 }}
          animate={{ rotate: 180, scale: -1 }}
          transition={{
              type: 'spring',
              stiffness: 40,
              damping: 10
          }}>
        <PageTitle>Projects</PageTitle>
        </motion.div>
        <PageDescriptionContainer>
          <motion.div
          initial={{ x: '100%', rotate: 90, scale: 0 }}
          animate={{ x: 0, rotate: 180, scale: -1 }}
          transition={{
              type: 'spring',
              stiffness: 600,
              damping: 100
          }}>
          <PageDescription>
            Browse through a collection of my work
          </PageDescription>
          </motion.div>
        </PageDescriptionContainer>
      </PagePresentation>
      <PageContent>
        <ProjectContainer>
          <ProjectList>
            {data.allContentfulPosts.edges.map(({node}) => {
              const slug = node.slug;
              return (
                <ListItem key={node.id}>
                  <motion.div>
                  <Title>
                    <ItemLink to={`/portfolio/${slug}`}>
                      {node.title}
                    </ItemLink>
                  </Title>
                  </motion.div>
                  <Link to={`/portfolio/${slug}`}>
                    <ImageContainer>
                      <ProjectImage
                        alt={node.title}
                        image={node.heroImage.gatsbyImage}
                      />
                      <ImageShadow></ImageShadow>
                    </ImageContainer>
                  </Link>
                </ListItem>
              )
            })}
          </ProjectList>
        </ProjectContainer>
      </PageContent>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
};

export default BlogTemplate;

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
  font-family: "DM Serif Display", serif;
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
  font-family: "Open Sans", sans-serif;
  font-size: 36px;
  color: black;

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

const ItemLink = styled(Link)`
  color: black;
  text-decoration: none;
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
