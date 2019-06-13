import React, { Component } from "react"
import styled from "styled-components"

const NavItem = styled.a`
  margin: 0 10px;
  position: relative;
  text-decoration: none;
`

const NavList = styled.div`
  position: relative;
  text-align: center;
  padding: 28px;
`

const NavLogo = styled.div`
  position: relative;
  text-align: center;
  margin: 0 auto 28px;
  font-size: 72px;
`

const NavBar = styled.div`
  background-color: #f5f5f5;
  position: relative;
  height: 25%;
  width: 100%;
`

class Nav extends Component {
  render() {
    return (
      <NavBar>
        <NavLogo>Hoang Nguyen
        </NavLogo>
        <NavList className="navlist">
          <NavItem href="#about">ABOUT</NavItem>
          <NavItem href="#exp">EXPERIENCE</NavItem>
          <NavItem href="#projects">PROJECTS</NavItem>
          <NavItem href="#blog">BLOG</NavItem>
          <NavItem href="#contact">CONTACT</NavItem>
        </NavList>
      </NavBar>
    )
  }
}

export default Nav
