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
  padding: 16px;
`

const NavLogo = styled.div`
  position: relative;
  text-align: center;
  margin: 0 auto 28px;
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
        <NavLogo>
          <div>Hoang Nguyen</div>
        </NavLogo>
        <NavList className="navlist">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#exp">Experience</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#blog">Blog</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavList>
      </NavBar>
    )
  }
}

export default Nav
