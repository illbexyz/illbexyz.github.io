import React from 'react'
import styled from 'styled-components'

import { SocialIcon } from 'react-social-icons'

const Container = styled.div`
  width: 40px;
  height: 40px;
  margin: 0px 12px;
  border-radius: 25px;
  transition: background-color 0.2s, transform 0.2s;
  &:hover {
    background-color: #f0ebdf;
    transform: scale(1.05);
  }
`
const Prova = styled(SocialIcon)`
  margin: -5px;
`

const Icon = ({ url }) => (
  <Container>
    <Prova url={url} />
  </Container>
)

export default Icon
