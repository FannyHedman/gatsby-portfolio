import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPosts = () => {
  const {
    allContentfulPosts: { nodes },
  } = useStaticQuery(graphql`
    query allBlogLinksQuery {
      allContentfulPosts(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          heroImage {
            gatsbyImage(width: 600)
          }
          slug
        }
      }
    }
  `)
  return nodes
}

export default useAllBlogPosts
