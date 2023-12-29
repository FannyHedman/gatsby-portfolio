// import * as React from "react"
// import { graphql, Link } from "gatsby"
// import {renderRichText} from 'gatsby-source-contentful/rich-text'
// import { GatsbyImage } from "gatsby-plugin-image"
// import styled from "styled-components"
// import Layout from "../components/layout"

// export const query = graphql`
// query ($slug: String!) {
//   contentfulPosts(slug: { eq: $slug}) {
//     title

//     heroImage {
//       gatsbyImage(width: 700)
//     }
//     description {
//       description
//     }
//   }
// }`

// const portfolioItem = (props) => {
//   return (
//     <Layout>
//       <h1>{props.data.contentfulPosts.title}</h1>
//       <GatsbyImage image={props.data.contentfulPosts.heroImage.gatsbyImage} alt={props.data.contentfulPosts.title}></GatsbyImage>
//     </Layout>
//   )
// }

// export default portfolioItem;


import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';


export const query = graphql`
  query ($slug: String!) {
    contentfulPosts(slug: { eq: $slug }) {
      title

    }
  }
`;

const PortfolioItem = (props) => {
  return (
    <Layout>
      <div className="content">
        <h1>{props.data.contentfulPosts.title}</h1>
       <p>test</p>
      </div>
    </Layout>
  );
};

export default PortfolioItem;
