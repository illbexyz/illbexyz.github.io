import React from 'react'
import styled from 'styled-components'

import profilePic from '../assets/profile.jpg'
import Contacts from './Contacts'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252c3f;
  justify-content: space-around;
  box-shadow: #1d1d1d 0px 0px 16px;
  margin: 0px 16px;

  @media (max-width: 850px) {
    align-self: center;
    height: 97vh;
    padding: 16px 24%;
  }
  @media (max-width: 520px) {
    align-self: center;
    padding: 16px 60px;
    width: 90%;
    height: 97vh;
  }
  @media (min-width: 851px) {
    align-self: auto;
    position: sticky;
    padding: 0px 24px;
    top: 0;
    min-width: 276px;
    width: 276px;
    height: 100vh;
  }
  @media (min-width: 981px) {
    min-width: 350px;
    width: 350px;
    height: 100vh;
  }
`

const Description = styled.div`
  @media (max-height: 670px) {
    overflow-y: scroll;
  }
`

const Bio = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={profilePic}
          alt={`Alberto Nicoletti`}
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '150px',
            border: '2px solid #F0EBDF',
            marginBottom: '0px',
          }}
        />

        <h2
          style={{
            marginTop: '1.3rem',
            marginBottom: '1rem',
          }}
        >
          Alberto Nicoletti
        </h2>
        <Description>
          <p>Hi! I don't really know why I made this website!</p>
          <p>But since you're here, take a look at my projects!</p>
          <p>
            I am currently pursuing a CS Master's Degree at the{' '}
            <a href="https://www.unibo.it/it">University of Bologna</a> and I
            work as a fullstack developer for{' '}
            <a href="https://braimage.it">Braimage</a>.
          </p>
        </Description>
        <Contacts />
      </div>
    </Container>
  )
}

export default Bio
