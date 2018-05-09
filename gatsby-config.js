module.exports = {
  siteMetadata: {
    title: 'Matt Bruton',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog_posts`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark',
  ],
}
