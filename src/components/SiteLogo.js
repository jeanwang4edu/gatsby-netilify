import React from 'react';
import {graphql, StaticQuery} from 'gatsby';

const SiteLogo = () => (
    <StaticQuery query={graphql`
        {
            allWordpressWpLogo {
                edges{
                    node{
                    id
                        url{
                            slug
                            source_url
                        }
                }
            }
        }
        }   
    `} render={ props => (
        <img src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Site Logo" height="100%" className="siteLogo" />
    ) }
    />
);

export default SiteLogo;