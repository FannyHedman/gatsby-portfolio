import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import { Link } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{marginTop: '100px'}}>{children}</main>
      {/* <footer>Footer</footer> */}
    </>
  )
}

export default Layout
