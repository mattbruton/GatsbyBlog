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

const Blog = ({ data }) => (
  <div>
    <h1>Blog Posts</h1>
    <BlogLinkContainer>
      {data.allMarkdownRemark.edges.map(post => {
        return (
          <BlogLink key={post.node.id} to={`${post.node.frontmatter.path}`}>
            {`${post.node.frontmatter.title}`}
          </BlogLink>
        )
      })}
    </BlogLinkContainer>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export const postsQuery = graphql`
  query PostsQuery {
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

export default Blog
