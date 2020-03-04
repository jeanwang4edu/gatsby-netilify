import React from "react";
import {graphql} from 'gatsby';
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/Post";

export default ({data}) => {
    // console.log(data);
    return (
        <PrimaryLayout column="col-xs-6">
          {data.allWordpressPost.nodes.map((node)=>(
            <Post 
              alt={node.featured_media.slug}
              image={node.featured_media.source_url}
              title={node.title}
              excerpt={node.excerpt}
              readmore={node.slug}
            />  
          ))}      
        </PrimaryLayout>
    )
}

export const query = graphql`
{
  allWordpressPost( filter:{ slug: { eq: "what-is-modern-dance" } } ) {
    nodes {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      excerpt
      categories {
        name
      }
      featured_media {
        source_url
        slug
      }
    }
  }
}
`

/* allWordpressPost(filter: {categories: {elemMatch: {name: { eq: "Informative" }}}}) { */