// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./content/blog/**/*.md",
      },
    },
    {
      use: "gridsome-source-static-meta",
      options: {
        path: "settings/*.json",
      },
    },
  ],
  templates: {
    BlogPost: "/blog/:slug",
  },
};
