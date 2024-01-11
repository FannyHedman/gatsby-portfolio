import * as React from 'react'
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image"

const AboutTemplate = (contentfulPage) => {
  return (
    <main>
      <div style={{marginTop: '100px'}}>
      <AboutTitle>{contentfulPage.title}</AboutTitle>
      <AboutImage alt={contentfulPage.image.description}
          image={contentfulPage.image.gatsbyImageData}></AboutImage>
      </div>
    </main>
  )
}

export default AboutTemplate;

const AboutTitle = styled.h2`
  font-family: "Rubik Doodle Shadow", system-ui;
  font-size: 64px;
  color: red;
`

const AboutImage = styled(GatsbyImage)`
  max-width: 100%;
  /* border-radius: 8px; */
  transform: rotate(5deg);
`
