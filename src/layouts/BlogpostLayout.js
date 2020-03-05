import React from 'react';
import {graphql} from 'gatsby'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import innertext from "innertext";
import {Image} from 'react-bootstrap';


const BlogpostLayout = ({data}) => {
    const post = data.wordpressPost;
    return (
        <div>
            <SEO
              title={innertext(post.title)}
              description={innertext(post.excerpt)}              
              keyword={post.categories.map(res => res.name).join(', ')}
            />
            <Header />
            <main>
              <div className="container">
                  <div className="row justify-content-md-center">
                      <Image src={post.featured_media.source_url} alt={post.featured_media.alt_text} rounded/>
                      <h1 dangerouslySetInnerHTML={{__html: post.title}} />
                      <div dangerouslySetInnerHTML={{__html: post.content}} />
                  </div>
              </div>
            </main>

            <Footer />
        </div>
    )
}

export default BlogpostLayout;

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      featured_media {
        source_url
        alt_text
      }
      categories {
        name
      }
      excerpt
    }
  }
`

/*
image={post.featured_media.source_url}
*/