// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gefyra | Blazingly-fast rocket, rock-solid, local application development arrow_right with Kubernetes.',
  tagline: 'Blazingly-fast 🚀, rock-solid, local application development ➡️ with Kubernetes.',
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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          includeCurrentVersion: false,
          versions: {
            'v1': {
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
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
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
        theme: {light: 'base', dark: 'forest'},
      }
    }),
    plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/installation/',
            from: '/installation/',
          },
          {
            to: '/docs/getting-started/',
            from: '/getting-started/',
          },
          {
            to: '/docs/getting-started/minikube',
            from: '/getting-started/minikube/',
          },
          {
            to: '/docs/getting-started/k3d',
            from: '/getting-started/k3d/',
          },
          {
            to: '/docs/getting-started/kind',
            from: '/getting-started/kind/',
          },
          {
            to: '/docs/getting-started/docker_desktop_osx',
            from: '/getting-started/docker-desktop-kubernetes-osx/',
          },
          {
            to: '/docs/getting-started/gcp',
            from: '/getting-started/google-cloud-platform-gcp/',
          },
          {
            to: '/docs/getting-started/eks',
            from: '/getting-started/aws-eks/',
          },
          {
            to: '/docs/getting-started/colima',
            from: '/getting-started/colima-kubernetes/',
          },
          {
            to: '/docs/getting-started/sys11',
            from: '/getting-started/syseleven-metakube-kubernetes/',
          },
          {
            to: '/docs/cli/',
            from: '/cli/',
          },
          {
            to: '/docs/tech/',
            from: '/details/',
          },
          {
            to: '/docs/tech/architecture',
            from: '/details/architecture/',
          },
          {
            to: '/docs/tech/what/',
            from: '/details/what-is-gefyra/',
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
            to: '/docs/usecases/',
            from: '/usecases/',
          },
          {
            to: '/docs/usecases/ubuntu-in-namespace',
            from: '/usecases/ubuntu-in-namespace/',
          },

          {
            to: '/docs/usecases/oauth2-demo',
            from: '/usecases/oauth2-demo/',
          },

          {
            to: '/docs/usecases/remote-gke',
            from: '/usecases/remote-development-with-gke/',
          },
          {
            to: '/docs/usecases/golang',
            from: '/usecases/developing-go-with-gefyra/',
          },
          {
            to: '/docs/enterprise',
            from: '/enterprise/',
          },
          {
            to: '/docs/media',
            from: '/media/',
          },
          {
            to: '/docs/about',
            from: '/about/',
          },

        ],
      },
    ],
  ]
};

module.exports = config;
