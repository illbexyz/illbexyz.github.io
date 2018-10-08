import React from 'react'

import styled from 'styled-components'

import Icon from './Icon'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  height: 50px;
  margin-top: 12px;
`

const Contacts = () => {
  return (
    <Container>
      <Icon url="https://twitter.com/illbexyz" />
      <Icon url="https://github.com/illbexyz" />
      <Icon url="https://linkedin.com/in/albertonicoletti/" />
    </Container>
  )
}

export default Contacts
