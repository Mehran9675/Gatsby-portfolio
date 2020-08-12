module.exports = ({
  basePath = "/",
  contentPath = "content/",
  showThemeLogo = false,
  theme = "gh-inspired",
}) => {
  return {
    siteMetadata: {
      description: "Personal page of Mehran Zahiroddini",
      locale: "en",
      showThemeLogo,
      title: "Mehran Zahiroddini",
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss")(require("./tailwind.config")(theme)),
            require("postcss-input-range"),
            require("autoprefixer"),
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath,
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}
module.exports = {
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "classic",
      },
    },
  ],
}