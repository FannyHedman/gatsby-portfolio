import React from 'react'
import '../css/style.css';
import {Link} from "gatsby";
import useNavigation from "../hooks/use-navigation";
import styled from 'styled-components';
import { useState } from 'react';

const Header = () => {

  const navigation = useNavigation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div>
        <NavbarContainer>
            <BrandName></BrandName>
            <NavLinks className={isMobileMenuOpen ? 'open' : ''}>
            {navigation.map(({ node }) => (
                // <li key={node.url}>
                  <NavLink to={node.url} key={node.url} style={{color: 'black'}}>
                    {node.title}
                  </NavLink>
                // </li>
              ))}
            </NavLinks>
            <MobileMenuIcon
                onClick={toggleMobileMenu}
                className={isMobileMenuOpen ? 'open' : ''}
            >
                <div></div>
                <div></div>
                <div></div>
            </MobileMenuIcon>
        </NavbarContainer>
    </div>
  )
}

export default Header


const NavbarContainer = styled.nav`
    position: fixed;
    width: 100%;
    height: 10vh;
    max-width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: #fff;
    padding: 20px 20px;
    z-index: 100;

    @media (max-width: 767px) {
        height: 15px;
    }
`

const BrandName = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    color: black;
    letter-spacing: 2px;
`

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5%;
    font-size: 20px;
    letter-spacing: 2px;

    @media (max-width: 767px) {
        margin-top: 100px;
        flex-direction: column;
        align-items: flex-start;
        max-height: ${(props) => (props.className === 'open' ? '200px' : '0')};
        overflow: hidden;
        transition: max-height 0.4s;
        text-align: center;
        font-size: 18px;
        background-color: pink;
        border-radius: 8px;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: pink;
    margin: 0 15px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        text-decoration: none;
        transform: scale(1.1);
    }

    @media (max-width: 767px) {
        padding: 1%;
    }
`

const MobileMenuIcon = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: block;
        cursor: pointer;
        padding-left: 20px;
    }

    div {
        width: 35px;
        height: 5px;
        background-color: white;
        margin: 4px 60px;
        transition: 0.4s;
    }

    &.open div:nth-child(1) {
        transform: rotate(45deg) translate(3px, 3px);
    }

    &.open div:nth-child(2) {
        opacity: 0;
    }

    &.open div:nth-child(3) {
        transform: rotate(-45deg) translate(3px, -3px);
    }
`
