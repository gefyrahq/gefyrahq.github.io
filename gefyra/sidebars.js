/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    'index',
    'installation',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc', id: 'getstarted/index'
      },
      items: [
        'getstarted/minikube',
        'getstarted/k3d',
        'getstarted/kind',
        'getstarted/docker_desktop_osx',
        'getstarted/gcp',
        'getstarted/eks',
        'getstarted/colima',
        'getstarted/sys11',
      ],
    },
    'cli',
    {
      type: 'category',
      label: 'Technical Details',
      link: {
        type: 'doc', id: 'tech/index'
      },
      items: [
        'tech/architecture',
        'tech/what',
      ],
    },
    'run_vs_bridge',
    'docker-extension',
    {
      type: 'category',
      label: 'Use Cases and Demos',
      link: {
        type: 'doc', id: 'usecases/index'
      },
      items: [
        'usecases/ubuntu-in-namespace',
        'usecases/oauth2-demo',
        'usecases/remote-gke',
        'usecases/golang',
      ],
    },
    'enterprise',
    'media',
    'about'
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
