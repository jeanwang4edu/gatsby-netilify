/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    siteMetadata: {
      title: "Gatsby-Bootstrap",
      description: "This is the the description of our website",
      keywords: "gatsby, gatsbyjs project, gatsby bootstrap",
      image: '/static/soap.jpg',
      url: 'https://www.gatsbyjs.org'
    },

    plugins: [
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          baseUrl: `codingsrc.com`,
          protocol: `http`,
          hostingWPCOM: false,
          useACF: false,
        },
      },
    ],

}

/*
          <Helmet>
            <title>Gatsby-Bootstrap Wordpress Sourced</title>
            <meta name="description" content="This is a description of our webiste" />
            <meta name="keywords" content="gatsby, gatsbyjs project, gatsby bootstrap" />
            <meta name="robots" content="index,follow" />
          </Helmet>
*/