import React from 'react'
import styled from 'styled-components'

const Column = styled.section`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  flex: 1;
  @media (max-width: 850px) {
    flex: auto;
    margin: 0px 8px;
  }
`

export default Column
