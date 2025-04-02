/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My 1st Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    // "gatsby-plugin-sitemap",
    // "gatsby-plugin-mdx", {
    // resolve: 'gatsby-source-filesystem',
    // options: {
    //   "name": "pages",
    //   "path": "./src/pages/"
    // },
    // __key: "pages"
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};