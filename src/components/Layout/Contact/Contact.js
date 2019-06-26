import React from "react"
import styled from "styled-components"
import fb from "../../../../public/icons/fb.png"
import insta from "../../../../public/icons/insta.png"
import linkedIn from "../../../../public/icons/linkedin.png"
import gmail from "../../../../public/icons/mail.png"
import git from "../../../../public/icons/github.png"

const MainContainer = styled.div`
  padding: 16px 0;
`

const SectionTitle = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 10px 0 20px 0;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`

const ListContainer = styled.div`
text-align:center;
padding: 5px 0;
`

const Item = styled.a`
padding: 0 5px;`

const Image = styled.img``

const Contact = () => {
  return (
    <MainContainer id="contact">
      <SectionTitle>get in touch</SectionTitle>
      <ListContainer>
        <Item href="#" rel="noopener noreferrer" target="_blank">
          <Image src={fb} />
        </Item>
        <Item href="#" rel="noopener noreferrer" target="_blank">
          <Image src={insta} />
        </Item>
        <Item href="#" rel="noopener noreferrer" target="_blank">
          <Image src={linkedIn} />
        </Item>
        <Item href="#" rel="noopener noreferrer" target="_blank">
          <Image src={gmail} />
        </Item>
        <Item href="#" rel="noopener noreferrer" target="_blank">
          <Image src={git} />
        </Item>
      </ListContainer>
    </MainContainer>
  )
}

export default Contact
