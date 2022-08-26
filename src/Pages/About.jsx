import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
  return (
    <Container>
    
    <Head>👨🏽‍💻WHOAMI👨🏽‍💻</Head>
  <AboutContainer> <Code>&lt;h1&gt;</Code> 
  <Text>19y/o Software Engineer creating intuitive and user-friendly experiences.</Text>
  <Code>&lt;/h1&gt;</Code>

    <Space></Space>

  <Code>&lt;p&gt;</Code> 
    <SText>Hi There,  <Color>I'm Olusegun</Color> <br />
    A software engineer based in Nigeria 🇳🇬
    I'm an ambitious developer with a passion for creating intuitive and user-friendly experiences.
    I specialise in building frontend web applications and mobile ios applications with a focus on usabilty and simplicity.</SText>
<Code>&lt;/p&gt;</Code> 

<Space></Space>

<Icons>
    <a className='icon' href="http://github.com/justolusegun" target="_blank"><GitHubIcon /></a>
    <a className='icon' href="https://twitter.com/justolusegun" target="_blank"><TwitterIcon /></a>
    <a className='icon' href="https://www.linkedin.com/in/olusegun-aina-23681921a/" target="_blank"><LinkedInIcon /></a>
    <a className='icon' href="https://www.instagram.com/justolusegun/" target="_blank"><InstagramIcon /></a>
</Icons>


</AboutContainer>
    </Container>
  )
}

export default About

const Container = styled.div`
  margin-top: 100px;
  // border: 1px solid #ccc;
  height: 100vh;
  padding: 0 20px;
`

const AboutContainer = styled.div`
  margin: 0 200px;
  @media (max-width: 957px){
    margin: 0 100px;
  }

  @media (max-width: 657px){
    margin: 0;
  }
`

const Code = styled.div`
  color: #e94b3cff;
  display: flex;
  font-family: cursive;
  font-weight: bold;
`
const Color = styled.span`
  color: #e94b3cff;
`

const Head = styled.h1`
  color: #e94b3cff;
  margin-bottom: 100px;
  font-family: 'Helvetica Neue';
`
const Text = styled.div`
  font-size: 50px;
  font-weight: 600;
  font-family: monospace;
  padding: 10px;
  text-align: left;
  @media (max-width: 857px){
    text-align: left;
    font-size: 35px;
  }
`
const SText = styled.div`
  font-size: 25px;
  font-family: monospace;
  padding: 10px;
  text-align: left;
  @media (max-width: 857px){
    text-align: left;
    font-size: 20px;
  }
`

const Space = styled.div`
  margin: 100px;
`

const Icons = styled.div`
  margin: 10px;
`