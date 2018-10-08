import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/layout'
import Column from '../components/Column'
import Bio from '../components/Bio'
import Projects from '../components/Projects'
import Talks from '../components/Talks'

import { rhythm } from '../utils/typography'

const Container = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    const projects = get(this, 'props.data.allMarkdownRemark.edges').filter(
      p => p.node.frontmatter.type === 'project'
    )

    const talks = get(this, 'props.data.allMarkdownRemark.edges').filter(
      p => p.node.frontmatter.type === 'talk'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        >
          <style type="text/css">{`
            html, body, ___gatsby {
              height: 100%;
            }
        `}</style>
        </Helmet>
        <Container>
          <Bio />
          <Column>
            <Projects projects={projects} />
          </Column>
          <Column>
            {talks ? (
              <Talks talks={talks} />
            ) : (
              <p>Nothing to see here... yet!</p>
            )}
          </Column>
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
