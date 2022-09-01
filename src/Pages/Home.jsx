import React from 'react'
import styled from 'styled-components'
import About from './About';
import Footer from '../Components/Footer';
import DownloadIcon from '@mui/icons-material/Download';


const Home = () => {
  return (
    <Container>
      <Hello>Hello, 👋🏾</Hello>
      <Hello>I am <Color>Olusegun</Color>,</Hello>
      <Hello>Front End and Application Developer</Hello>
      <Where>Currently located in Nigeria, I love building <Color>interative</Color>, digital experiences, bringing yours ideas to life </Where>
      <ButtonGroup>
        <LeftButton><a href="mailto:ainayoungg@gmail.com" target="_blank" >Let's get in touch!</a></LeftButton>
        <RightButton><a href="./assets/OlusegunAina.pdf" download >Download Resume<DownloadIcon style={{marginLeft: "20px", height:"15px", width:"15px"}} /></a></RightButton>
    </ButtonGroup>
    <About/>

    <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
  margin-top: 200px;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  z-index: 1000000;
  @media (max-width: 857px){
    margin-top: 150px;
  }
`

const Hello = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 39px;
  font-family: 'Helvetica Neue';
  @media (max-width: 857px){
    font-size: 30px;
  }
  
`

const Color = styled.span`
  color: #e94b3cff;
`

const Where = styled.div`
  font-size: 17px;
  font-family: 'Helvetica Neue';
  // font-weight: smaller;
  margin-bottom: 20px;
`

const ButtonGroup = styled.div`
  margin-bottom: 200px;
`

const LeftButton = styled.button`
    background-color: transparent;
    height: 40px;
    width: 256px;
    border-radius: 2px;
    color: white; 
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    margin : 8px; 
    cursor: pointer; 
    outline: none;
    box-shadow: none;
    border: 1px solid #e94b3cff;
 `

 const RightButton = styled(LeftButton)`
    color : black;
 `

 const Responsive = styled.div`
  display : none;
  @media (max-width: 857px){
    display : block;
  }
 `