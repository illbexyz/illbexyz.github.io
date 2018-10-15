import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Projects from '../components/Projects'
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

const ProjectsPage = props => {
  const projects = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <Helmet title={'Alberto Nicoletti | Projects'} />
      <Container>
        <Projects projects={projects} />
      </Container>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          excerpt
          html
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
