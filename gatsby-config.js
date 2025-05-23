/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My 1st Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
//    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx", 
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};