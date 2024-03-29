import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const useNavigation = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: { url: ASC }) {
        edges {
          node {
            template
            url
            title
            id
          }
        }
      }
    }
  `);

  // Filter out the 404 page (so that it does not show up in the navbar)
  const filteredNavigation = allContentfulPage.edges.filter(({ node }) => node.url !== '404' && node.url !== '/');

  return filteredNavigation;
};

export default useNavigation;
