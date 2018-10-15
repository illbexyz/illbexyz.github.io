import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Talks from '../components/Talks'
import Layout from '../components/layout'

const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0px 8px;
  }
  @media (min-width: 901px) {
    width: 900px;
  }
`

const TalksPage = props => {
  const talks =
    (props.data.allMarkdownRemark && props.data.allMarkdownRemark.edges) || []
  return (
    <Layout>
      <Helmet title={'Alberto Nicoletti | Talks'} />
      <Container>
        <Talks talks={talks} />
      </Container>
    </Layout>
  )
}

export default TalksPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "talk" } } }
    ) {
      edges {
        node {
          html
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            link
            tags
            type
            path
          }
        }
      }
    }
  }
`
