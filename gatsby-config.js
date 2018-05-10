module.exports = {
  siteMetadata: {
    title: 'Matt Bruton',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog_posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:400,700`,
          // `source sans pro\:300,400,400i,700` you can also specify font weights and styles
        ],
      },
    },
  ],
}
