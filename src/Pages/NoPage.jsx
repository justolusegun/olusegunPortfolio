import React from 'react'
import styled from 'styled-components'

const NoPage = () => {
  return (
    <Container>
        <h1>No Page Found</h1>
    </Container>
  )
}

export default NoPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 600px;
    margin-top: 300px;
    align-items: center;
`