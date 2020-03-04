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
        resolve: "gatsby-source-wordpress",
        options: {
          /*
           * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
           * Example : 'demo.wp-api.org' or 'www.example-site.com'
           */
          baseUrl: "artsinmotion.net",
          // The protocol. This can be http or https.
          protocol: "https",
          hostingWPCOM: false,
          // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
          // This feature is untested for sites hosted on wordpress.com.
          // Defaults to true.
          useACF: false,
          includedRoutes: [
            "**/categories",
            "**/posts",
            "**/pages",
            "**/media",
            "**/tags",
            "**/taxonomies",
            "**/users",
          ],
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `GatsbyJS Bootstrap Tutorial`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          background_color: `#f8f9fa`,
          theme_color: `#ffffff`,
          display: `standalone`,
        },
      },
      `gatsby-plugin-offline`
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