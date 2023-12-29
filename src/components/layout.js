import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import {Link} from "gatsby";
import useNavigation from "../hooks/use-navigation";

const Layout = ({ children }) => {
  const navigation = useNavigation();

return (
    <>
      <header><Link to="/">Gatsby ITHS-starter</Link></header>
      <main>{children}</main>
      {navigation.map((item, index) => (
        <a key={index} href={item.url}>{item.title}</a>
      ))}
      <footer>Footer</footer>
    </>
  )
}


export default Layout
