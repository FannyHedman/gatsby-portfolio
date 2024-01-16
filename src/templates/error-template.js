import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import { Link } from "gatsby"

const ErrorTemplate = ({ content, title, image }) => {
  return (
    <CenteredDiv>
      <h2>{title}</h2>
      {content && content.raw && (
        <p>{documentToReactComponents(JSON.parse(content.raw))}</p>
      )}
      <Link to="/">Go back to the homepage</Link>
    </CenteredDiv>
  )
}

export default ErrorTemplate

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
