import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <p>&copy; 2022 Olusegun Aina. All Rights Reserved.</p>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    padding: 8%;
  width: 100%;
  font-family: monospace;
`