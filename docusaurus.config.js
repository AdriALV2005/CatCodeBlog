// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lenguajes de Programación",
  tagline: "Explorando los dominios del código",
  favicon: "https://i.ibb.co/Sxv4YXF/logo-cat-code.png",

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/CatCodeBlog",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AdriALV2005", // Usually your GitHub org/user name.
  projectName: "CatCodeBlog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "gh-pages",
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "https://i.ibb.co/Sxv4YXF/logo-cat-code.png",
      navbar: {
        title: "Cat Code ",
        logo: {
          alt: "AQUI ES EL ALT DE LA IMAGEN",
          src: "https://i.ibb.co/Sxv4YXF/logo-cat-code.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Introducción ",
          },

          //{to: '/blog', label: 'Deportes', position: 'left'},
          {
            href: "https://github.com/AdriALV2005/CatCodeBlog", //PONER LINK PARA GITHUB
            label: "GitHub",
            position: "right",
          },
        ],
      },



      footer: {
        style: "dark",
        links: [],
        copyright: `LUPECOPYRIGHT © ${new Date().getFullYear()} <a href="https://github.com/BryanCoronado">Bryan Coronado</a> y <a href="https://github.com/AdriALV2005">Adribell Montes</a>`,
    },
    


      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
