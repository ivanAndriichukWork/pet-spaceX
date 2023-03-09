import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SpaseX`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SpaceX",
        fieldName: "spacex",
        url: process.env.GATSBY_SPACEX_GRAPHQL,
      },
    },
    // {
    //   resolve: "gatsby-source-rest-api",
    //   options: {
    //     endpoints: [
    //       'https://api.spacexdata.com/v5/payloads/query',
    //       'https://api.spacexdata.com/v5/payloads/query',
    //     ]
    //   },
    // },
  ]
};

export default config;
