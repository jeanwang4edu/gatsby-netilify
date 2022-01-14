import React from 'react';
import {graphql} from 'gatsby'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import innertext from "innertext";
// import {Image} from 'react-bootstrap';


const BlogPostLayout = ({data}) => {
    const post = data.wpPost;
    return (
        <div>
            <SEO
              title={innertext(post.title)}
              description={innertext(post.excerpt)}              
              keyword={post.categories.nodes.map(res => res.name).join(', ')}
              image={post.featuredImage.node.sourceUrl}
            />
            <Header />
            <main>
              <div className="container">
                  <div className="row justify-content-md-center">     
                      <img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />                 
                      <h1 dangerouslySetInnerHTML={{__html: post.title}} />
                      <div dangerouslySetInnerHTML={{__html: post.content}} />
                  </div>
              </div>
            </main>

            <Footer />
        </div>
    )
}

export default BlogPostLayout;

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      content
      title 
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
        }
      }
      excerpt
    }
  }
`

/*
image={post.featuredImage.source_url}
<Image src={post.featuredImage.source_url} alt={post.featuredImage.alt_text} rounded/>

{
  allWpPost( filter:{ slug: { eq: "what-is-modern-dance" } } ) {
    nodes {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      excerpt
      categories {
        name
      }
      featuredImage {
        source_url
        slug
      }
    }
  }
}
*/