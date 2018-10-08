import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'

import ProjectTag from '../components/ProjectTag'

import { rhythm } from '../utils/typography'

const Talks = ({ talks }) => (
  <div>
    <Link to="/talks">
      <h1>Talks</h1>
    </Link>
    {talks.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <a href={node.frontmatter.path}>{title}</a>
          </h3>
          <p>
            {node.frontmatter.tags.map((tag, i) => (
              <ProjectTag key={i}>{tag}</ProjectTag>
            ))}
          </p>
          <p dangerouslySetInnerHTML={{ __html: node.html }} />
          <p>{node.frontmatter.description}</p>
        </div>
      )
    })}
  </div>
)

export default Talks
