import * as React from "react"
import { graphql, Link } from "gatsby"
// import {renderRichText} from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import Layout from "../components/layout"

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
`;

const portfolioItem = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulPosts.title}</h1>
      <GatsbyImage image={props.data.contentfulPosts.heroImage.gatsbyImage} alt={props.data.contentfulPosts.title}></GatsbyImage>
      <p>{props.data.contentfulPosts.description.description}</p>
    </Layout>
  )
}

export default portfolioItem;
