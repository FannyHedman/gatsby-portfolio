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
          {/* <ul>
            <ListItem>
              {documentToReactComponents(JSON.parse(node.contactLinks.raw))}
            </ListItem>
          </ul> */}
          <Card>
            {data.allContentfulContactInformation.edges.map(({ node }) => (
              <CardDiv key={node.id}>
                {/* <CardHeading>{node.title}</CardHeading> */}
                {/* <CardText>{node.contactText}</CardText> */}
                <CardList>
                  <CardListItem>
                    {documentToReactComponents(
                      JSON.parse(node.contactLinks.raw)
                    )}
                  </CardListItem>
                </CardList>
              </CardDiv>
            ))}
          </Card>
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
  font-family: "Rubik Doodle Shadow", system-ui;

`
const Card = styled.div`
  /* position: relative; */
  /* z-index: 1; */
  /* margin-top: 65%; */
  width: 200px;
  /* margin-left: -28%; */
  height: 150px;
  background-color: #e9dded;
  /* border: 4px solid #99c3ff; */
  border: 2px solid ${textColor};
  border-radius: 5px;
  /* box-shadow: 10px 10px 7px -5px rgba(0, 0, 0, 0.3); */
  /* box-shadow: 5px 5px 0px #b0d0ff, 10px 10px 0px #c0daff; */
  box-shadow: 6px 6px 0px ${textColor};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  /* Ipad */
  @media (max-width: 1024px) {
    margin-top: 50%;
    width: 200px;
    margin-left: -12%;
    height: 250px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    margin-left: 30%;
    margin-top: 10%;
  }
`

const CardDiv = styled.div`
  margin: 10%;
`

const CardHeading = styled.h5`
  font-family: "Caprasimo", serif;
  font-size: 18px;
  color: ${textColor};
`

const CardText = styled.p`
  color: ${textColor};
  font-family: "Caprasimo", serif;
`

const CardList = styled.ul`
  list-style-type: none;
`

const CardListItem = styled.li`
  text-decoration: none;
  color: black;
  align-items: center;

  a {
    color: ${textColor};
    text-decoration: none;
    font-family: "Caprasimo", serif;
    font-size: 14px;
    transition: color 0.4s;
    &:hover {
      color: lightskyblue;
    }
  }
`
