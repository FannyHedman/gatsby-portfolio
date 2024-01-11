import React from 'react'
import '../css/style.css';
import {Link} from "gatsby";
import useNavigation from "../hooks/use-navigation";

const Header = () => {

  const navigation = useNavigation();

  return (
    <div>
      <ul className="navbar-nav">
              {navigation.map(({ node }) => (
                <li className="nav-item" key={node.template}>
                  <Link to={node.url} className="nav-link" key={node.url}>
                    {node.template}
                  </Link>
                </li>
              ))}
            </ul>
    </div>
  )
}

export default Header
