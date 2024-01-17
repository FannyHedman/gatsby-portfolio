// import * as React from 'react'
// import { useStaticQuery, graphql } from "gatsby"

// const ContactTemplate = (contentfulPage) => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulContactInformation {
//         edges {
//           node {
//             id
//             contactImage {
//               gatsbyImage(width: 600)
//             }
//             contactLinks {
//               raw
//             }
//             contactText
//             title
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <main>
//       <h2>{contentfulPage.title}</h2>
//       <p>{data.contactText}</p>
//     </main>
//   )
// }

// export default ContactTemplate;

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { textColor } from "../css/colors"

const ContactTemplate = () => {
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
      <Helmet>
        <meta name="description" content="Contact information" />
      </Helmet>
      {data.allContentfulContactInformation.edges.map(({ node }) => (
        <CenteredDiv key={node.id}>
          {/* <h2>{node.title}</h2> */}
          {/* <GatsbyImage
            image={node.contactImage.gatsbyImage}
            alt={`Contact Image for ${node.title}`}
          /> */}
          <ContactText>{node.contactText}</ContactText>
          <ul>
            <ListItem>
              {documentToReactComponents(JSON.parse(node.contactLinks.raw))}
            </ListItem>
          </ul>
        </CenteredDiv>
      ))}
    </main>
  )
}

export default ContactTemplate

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`
const ListItem = styled.li`
  list-style-type: none;
  font-size: 28px;
  text-align: center;
  a {
    color: rgb(148, 205, 251);
    text-decoration: none;
  }
`

const ContactText = styled.h1`
color: ${textColor};
margin-bottom: 5vh;
`
