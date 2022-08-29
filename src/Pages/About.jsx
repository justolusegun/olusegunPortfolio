import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import LanguageIcon from '@mui/icons-material/Language';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { ViewColumn } from '@mui/icons-material';

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
<Space></Space>

  <Skills>
  <SText>Skills</SText>
   <SkillT> 
    <SkillBox className='skillbox'><Icons><WebIcon /> <LanguageIcon /></Icons> Web Development</SkillBox>
    <SkillBox className='skillbox'><Icons><AppleIcon /> <AndroidIcon /></Icons> Mobile App Development</SkillBox>
    <SkillBox className='skillbox'><Icons><ViewQuiltIcon /> <ViewColumn /></Icons> UI/UX Design</SkillBox>
    </SkillT>
  </Skills>

  <Technology>
  <SText>Technologies</SText>
  <SText className='small'>The list of technologies i've learnt and worked with.</SText>
  <TechL>
    <TechBox className='skillbox'>JavaScript</TechBox>
    <TechBox className='skillbox'>HTML</TechBox>
    <TechBox className='skillbox'>CSS</TechBox>
    <TechBox className='skillbox'>React</TechBox>
    <TechBox className='skillbox'>Material UI</TechBox>
    <TechBox className='skillbox'>IOS</TechBox>
    <TechBox className='skillbox'>Swift</TechBox>
    <TechBox className='skillbox'>Swift UI</TechBox>
    <TechBox className='skillbox'>Figma</TechBox>
    <TechBox className='skillbox'>Firebase</TechBox>
    <TechBox className='skillbox'>Python</TechBox>
    <TechBox className='skillbox'>Android</TechBox>
  </TechL>
  </Technology>
  

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

const Skills = styled.div`
  margin-bottom: 100px;
`
const SkillT = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const SkillBox = styled.div`
  height: 200px;
  width: 300px;
  margin: 10px;
  padding: 50px;
  font-family: monospace;
  font-size: 16px;
  border-radius: 5px;
  @media (max-width: 1059px){
    width: 100%;
  }
`

const Technology = styled.div`
  
`

const TechL = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const TechBox = styled.div`
  border-radius: 5px;
  height: 70px;
  width: 150px;
  margin: 10px;
  padding: 20px;
  font-family: monospace;
  font-size: 12px;
  @media (max-width: 857px){
    width: 140px;
  }
`