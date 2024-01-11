import * as React from "react"
import { graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import PortfolioTemplate from '../templates/portfolio-template'
import AboutTemplate from '../templates/about-template'
import HomeTemplate from '../templates/home-template'

const Page = (props) => {
  const {data} = props;

  const {contentfulPage} = data;

  const getTemplate = (contentfulPage) => {
    switch (contentfulPage.template) {
      case 'about' :
      return <AboutTemplate {...contentfulPage}/>;
      case 'portfolio' :
        return <PortfolioTemplate {...contentfulPage}/>
        // default bör vara defaultTemplate ej home
      default: return <HomeTemplate {...contentfulPage}/>
    }
  }
  return (
    <Layout>{getTemplate(contentfulPage)}</Layout>
  )
}

export const data = graphql`
query pageQuery($id: String) {
  contentfulPage(id: { eq: $id}) {
    url
    title
    template
  }
}`

export default Page;
