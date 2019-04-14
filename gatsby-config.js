let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
