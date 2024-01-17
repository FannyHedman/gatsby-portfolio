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


import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Helmet } from "react-helmet"

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
  `);

  return (
    <main>
      <Helmet>
        <meta name="description" content="Contact information"/>
      </Helmet>
      {data.allContentfulContactInformation.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.title}</h2>
          <GatsbyImage
            image={node.contactImage.gatsbyImage}
            alt={`Contact Image for ${node.title}`}
          />
          <p>{node.contactText}</p>
          <ul>
            <li>{documentToReactComponents(JSON.parse(node.contactLinks.raw))}</li>
          </ul>
        </div>
      ))}
    </main>
  );
};

export default ContactTemplate;
