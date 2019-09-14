module.exports = {
  siteMetadata: {
    title: `Learn about space, science facts, physics, planets, star - Infact`,
    description: `learn with us about galaxy stars system, planets, black hole, ask any queries about 
infinite world - Infact`,
    author: `@infact`,

    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "page2",
        link: "/page-2",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `author`,
        path: `${__dirname}/src/authors/`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Infact`,
        short_name: `Infact`,
        start_url: `/`,
        background_color: `#563d7c`,
        theme_color: `#563d7c`,
        display: `standalone`,
        icon: `src/images/logo1.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
