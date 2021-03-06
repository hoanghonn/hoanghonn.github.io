import React, { Component } from "react"
import styled from "styled-components"

const NavBar = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

const NavItem = styled.a`
  margin: 0 10px;
  position: relative;
  text-decoration: none;
  font-size: 17px;
  font-family: raleway, sans-serif;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  display: inline-block;

  @media only screen and (max-width: 300px) {
    font-size: 15px;
  }
`

const NavList = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
`

const NavLogo = styled.div`
  position: relative;
  text-align: center;
  margin: 5% auto;
  font-size: 60px;
  letter-spacing: 0 px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;

  @media only screen and (max-width: 600px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 45px;
  }

  @media only screen and (max-width: 376px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 300px) {
    font-size: 30px;
  }
`

class Navigator extends Component {
  render() {
    return (
      <NavBar>
        <NavLogo>hoang nguyen</NavLogo>
        <NavList>
          <NavItem href="#about">about</NavItem>
          <NavItem href="#experience">experience</NavItem>
          <NavItem href="#featured-projects">projects</NavItem>
          <NavItem href="#blog">blog</NavItem>
          <NavItem href="#contact">contact</NavItem>
        </NavList>
      </NavBar>
    )
  }
}

export default Navigator
