import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'

import ProjectTag from '../components/ProjectTag'

import { rhythm } from '../utils/typography'

const Projects = ({ projects }) => (
  <div>
    <Link to="/projects">
      <h1>Projects</h1>
    </Link>
    {projects.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <a style={{ boxShadow: 'none' }} href={node.frontmatter.link}>
              {title}
            </a>
          </h3>
          <p>
            {node.frontmatter.tags.map((tag, i) => (
              <ProjectTag key={i}>{tag}</ProjectTag>
            ))}
          </p>
          <p>{node.frontmatter.description}</p>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      )
    })}
  </div>
)

export default Projects
