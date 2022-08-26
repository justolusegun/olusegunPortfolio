import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Container>
    
    <h2>👨🏽‍💻WHOAMI👨🏽‍💻</h2>
   <Code>&lt;h1&gt;</Code> 
  <h1>19y/o Software Engineer creating intuitive and user-friendly experiences.</h1>
  <Code>&lt;/h1&gt;</Code>
    </Container>
  )
}

export default About

const Container = styled.div`
  margin-top: 100px;
  // border: 1px solid #ccc;
  height: 100vh;
  padding: 0 100px
`
const Code = styled.div`
  
  color: #e94b3cff;
  display: flex;
  align-items: flex-start;
`