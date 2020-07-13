module.exports = {
  siteMetadata: {
    title: `Løwe Design`,
    name: `Løwe Design`,
    siteUrl: `https://lowedesign.no`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Moderne og innovative løsninger på digitale utfordringer.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/VegardLoewe`,
      },
      {
        name: `behance`,
        url: `https://www.behance.net/VegardLoewe`,
      },
      {
        name: `mailto`,
        url: `mailto:vegard@lowedesign.no`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/vegard-lowe/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/Vegardloewe`,
      },
    ],
    contact: [
        {
            name: `mailto`,
            url: `mailto:vegard@lowedesign.no`,
        }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        tags: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
        resolve: 'gatsby-plugin-scss-typescript',
    },
  ],
};
