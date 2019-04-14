import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        allContentfulRelease {
          edges {
            node {
              title,
              artist {
                name
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulRelease: { edges } }) => (
      <header>
        <h1>7" Record Collection</h1>
        {edges.map(({ node: { title, artist } }) => (
          <div key={title}>
            <p><em>{title}</em> - {artist.map(({ name }) => name)}</p>
          </div>
        ))
        }
        <p>...</p>
      </header>
    )}
  />
);

export default IndexPage;
