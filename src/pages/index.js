import React from "react";
import {graphql} from 'gatsby';
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/Post";

const App = ({data}) => {
    // console.log(data);
    return (
        <PrimaryLayout column="col-xs-6">
          {data.allWpPost.nodes.map((node)=>(
            <Post 
              alt={node.featuredImage.node.slug}
              image={node.featuredImage.node.sourceUrl}
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
  allWpPost {
    nodes {
      slug
      title
      excerpt
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          slug
        }

      }
    }
  }
}
`
export default App;