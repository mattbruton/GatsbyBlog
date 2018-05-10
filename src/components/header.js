import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderLink = styled(Link)`
  color: #333;
  font-family: 'Raleway', monospace;
  text-decoration: none;
`

const HeaderPrimaryLink = styled(HeaderLink)`
  font-weight: 700;
`

const HeaderNavLink = styled(HeaderLink)`
  font-weight: 400;
  &:hover {
    font-weight: 700;
  }
`
const HeaderNavigationList = styled('ul')`
  align-items: center;
  display: flex;
  margin: 0;
  & li {
    margin: 0;
    padding: 0px 0.5rem;
    list-style: none;
  }
  & li:nth-child(1) {
    padding: 0 0.5rem 0 0;
  }
`

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
      borderBottom: '.2rem solid #333333',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: 1376,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.75em' }}>
        <HeaderPrimaryLink to="/">{siteTitle}</HeaderPrimaryLink>
      </h1>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <HeaderNavigationList>
          <li>
            <HeaderNavLink to="/blog">Blog</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/contact">Contact</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/about">About Me</HeaderNavLink>
          </li>
        </HeaderNavigationList>
      </nav>
    </div>
  </div>
)

export default Header
