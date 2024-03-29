import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const Seo = ({title, description, keywords, image}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultImage,
          url,
          defaultKeywords,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image ? image : url+defaultImage}`,
        keywords: keywords || defaultKeywords,
      }
      return (
        <Helmet>
          <html lang="en" />
          <title>{seo.title}</title>
          <meta name="image" content={seo.image} />
          <meta
            name="description"
            content={seo.description}
          />
          <meta
            name="keywords"
            content={seo.keywords}
          />
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
      )
    }}
  />
);

export default Seo;

const query = graphql`
{
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        url
        defaultKeywords: keywords
      }
    }
}
`
