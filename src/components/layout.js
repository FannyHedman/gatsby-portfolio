import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import { Link } from "gatsby"
import Header from "./header"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {

  // This query will provide siteMetadata, that you can use for meta tags (use react Helmet)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta name="author" content={data.site.siteMetadata.author}/>
      </Helmet>
      <Header />
      <main style={{ marginTop: "100px", marginBottom: "100px" }}>
        {children}
      </main>
      {/* <footer>Footer</footer> */}
    </>
  )
}

export default Layout
