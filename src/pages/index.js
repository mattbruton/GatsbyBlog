import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const BlogLink = styled(Link)`
  color: goldenrod;
`

const BlogLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h2>Blog Posts</h2>
    <BlogLinkContainer>
      {data.allMarkdownRemark.edges.map(post => {
        return (
          <BlogLink key={post.node.id} to={`${post.node.frontmatter.path}`}>
            {`${post.node.frontmatter.title}`}
          </BlogLink>
        )
      })}
    </BlogLinkContainer>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
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
