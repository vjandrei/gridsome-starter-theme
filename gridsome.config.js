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
        typeName: "Author",
        path: "./content/author/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Blog",
        path: "./content/blog/**/*.md",
        refs: {
          author: "Author",
          tags: {
            typeName: "Tag",
            create: true,
          },
          category: {
            typeName: "Category",
            create: true,
          },
        },
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
    Blog: [
      {
        path: "/blog/:title",
        component: "./src/templates/BlogEntry.vue",
      },
    ],
    Category: [
      {
        path: "/category/:title",
        component: "./src/templates/Category.vue",
      },
    ],
    Tag: [
      {
        path: "/tag/:title",
        component: "./src/templates/Tag.vue",
      },
    ],
  },
};
