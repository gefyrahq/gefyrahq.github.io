// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gefyra | Blazingly-fast rocket, rock-solid, local application development arrow_right with Kubernetes.',
  tagline: 'Blazingly-fast, rock-solid, local application development with Kubernetes.',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],


  // Set the production url of your site here
  url: 'https://gefyra.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Blueshoe GmbH', // Usually your GitHub org/user name.
  projectName: 'gefyra', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          includeCurrentVersion: false,
          versions: {
            '1.x': {
              banner: 'none'
            }
          },
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-MZZHWCF',
        },
        gtag: {
          trackingID: 'G-MDH0PRFGS1',
          anonymizeIP: true,
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_us",
        content:
          'If you like Gefyra, please give us a ⭐ star on <a target="_blank" href="https://github.com/gefyrahq/gefyra/">GitHub</a> and support this project.',
        backgroundColor: "#ebedf0",
        textColor: "#1c1e21",
        isCloseable: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Gefyra Logo',
          src: 'img/gefyra_horizontal_logo.svg',
          srcDark: 'img/gefyra_horizontal_logo_dark.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docsSidebar',
          //   docsPluginId: 'devenvs',
          //   position: 'left',
          //   label: 'Development Environments',
          // },
          // {
          //   position: 'right',
          //   label: 'Pricing',
          //   to: '/pricing',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            docsPluginId: 'usecases',
            position: 'right',
            label: 'Usecases and Demos',
          },
          {
            position: 'right',
            label: 'Media',
            to: '/media',
          },
          {
            position: 'right',
            label: 'About',
            to: '/about',
          },
          {
            html: '<iframe style="margin-top: 8px;" src="https://ghbtns.com/github-btn.html?user=gefyrahq&repo=gefyra&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>',
            href: 'https://github.com/gefyrahq/gefyra',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/index',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/8NTPMVPaKy',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BLUESHOE_GmbH',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/gefyrahq/gefyra',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gefyra, Blueshoe GmbH. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: { light: 'base', dark: 'dark' },
      }
    }),
  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'devenvs',
    //     path: 'devenvs',
    //     routeBasePath: 'container-based-development',
    //     sidebarPath: require.resolve('./sidebarsDevenvs.js'),
    //   },
    // ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'usecases',
        path: 'usecases',
        routeBasePath: 'usecases-and-demos',
        sidebarPath: require.resolve('./sidebarsUsecases.js'),
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/installation/',
            from: '/installation/',
          },
          {
            to: '/docs/local-environments/',
            from: '/getting-started/',
          },
          {
            to: '/docs/local-environments/minikube',
            from: '/getting-started/minikube/',
          },
          {
            to: '/docs/local-environments/k3d',
            from: '/getting-started/k3d/',
          },
          {
            to: '/docs/local-environments/kind',
            from: '/getting-started/kind/',
          },
          {
            to: '/docs/local-environments/docker_desktop_osx',
            from: '/getting-started/docker-desktop-kubernetes-osx/',
          },
          {
            to: '/docs/shared-environments/remote-k8s/gcp',
            from: '/getting-started/google-cloud-platform-gcp/',
          },
          {
            to: '/docs/shared-environments/remote-k8s/eks',
            from: '/getting-started/aws-eks/',
          },
          {
            to: '/docs/local-environments/colima',
            from: '/getting-started/colima-kubernetes/',
          },
          {
            to: '/docs/shared-environments/remote-k8s/sys11',
            from: '/getting-started/syseleven-metakube-kubernetes/',
          },
          {
            to: '/docs/cli/',
            from: '/cli/',
          },
          {
            to: '/docs/technical-details',
            from: '/docs/tech/',
          },
          {
            to: '/docs/technical-details/architecture',
            from: '/docs/tech/architecture/',
          },
          {
            to: '/docs/technical-details/what',
            from: '/docs/tech/what/',
          },
          {
            to: '/docs/run_vs_bridge/',
            from: '/run-vs-bridge/',
          },
          {
            to: '/docs/docker-extension/',
            from: '/docker-desktop-extension/',
          },
          {
            to: '/usecases-and-demos/',
            from: '/usecases/',
          },
          {
            to: '/usecases-and-demos/',
            from: '/docs/usecases/',
          },
          {
            to: '/usecases-and-demos/ubuntu-in-namespace',
            from: '/docs/usecases/ubuntu-in-namespace/',
          },
          {
            to: '/usecases-and-demos/ubuntu-in-namespace',
            from: '/usecases/ubuntu-in-namespace/',
          },
          {
            to: '/usecases-and-demos/oauth2-demo',
            from: '/docs/usecases/oauth2-demo/',
          },
          {
            to: '/usecases-and-demos/oauth2-demo',
            from: '/usecases/oauth2-demo/',
          },
          {
            to: '/usecases-and-demos/remote-gke',
            from: '/docs/usecases/remote-gke/',
          },
          {
            to: '/usecases-and-demos/remote-gke',
            from: '/usecases/remote-development-with-gke/',
          },
          {
            to: '/usecases-and-demos/golang',
            from: '/docs/usecases/golang/',
          },
          {
            to: '/usecases-and-demos/golang',
            from: '/usecases/developing-go-with-gefyra/',
          },
          {
            to: '/pricing',
            from: '/enterprise/',
          },
          {
            to: '/pricing',
            from: '/docs/enterprise/',
          },
          {
            to: '/media/',
            from: '/docs/media',
          },
          {
            to: '/about/',
            from: '/docs/about',
          },

        ],
      },
    ],
  ]
};

module.exports = config;
