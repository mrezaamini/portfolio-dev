/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mohammadreza Amini`,
    description: `Mohammadreza Amini sapphire personal website`,
    githubUsername: `@mrezaamini`,
    image: `/favicon.ico`,
    siteUrl: `https://mrezaamini.github.io`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/src/works/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `publications`,
        path: `${__dirname}/src/publications/`,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bodoni Moda\:300,400,500,700,500i,700i`, // titles
          `Prompt\:300,400,500,700`, // titles
          `Open Sans\:100,300,400,500,700,500i,700i`, // sans-serif
          `Montserrat\:100,300,400,500,700,500i,700i.300i,100i`, // ont-family: 'Montserrat', sans-serif;
          `IBM Plex Mono\:200,300,400,500`, //font-family: 'IBM Plex Mono', monospace;
          `Syne\:500,600,700,800`, //font-family: 'Syne', sans-serif;
        ],
        display: "swap",
      },
    },
  ],
};
