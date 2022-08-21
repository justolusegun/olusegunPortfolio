import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Project from '../Pages/Project';
import Contact from '../Pages/Contact';
import NoPage from '../Pages/NoPage';

const Links = () => {
  return (
    <Container>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </Container>
  )
}

export default Links

const Container = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;    
  right: 0;
  z-index: 10;
`