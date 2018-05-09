import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h2>Blog Posts</h2>
    {data.allMarkdownRemark.edges.map(post => {
      return (
        <Link key={post.node.id} to={`${post.node.frontmatter.path}`}>
          {`${post.node.frontmatter.title}`}
        </Link>
      )
    })}
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const postsQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
