import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const Logo = require('@site/static/img/gefyra_vertical_logo.svg').default
const Run = require('@site/static/img/run.svg').default
const Bridge = require('@site/static/img/bridge.svg').default

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner, styles.lightBg)}>
      <div className="container">
        <Logo />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            <div class="col col--4">
              <div className="text--center">
                <Run className={styles.featureSvg} />
              </div>
              <div className="text--center padding-horiz--md">
                <h3>Connect to clusters</h3>
                <p>Run containers and talk to internal services on an external Kubernetes cluster.</p>
              </div>
            </div>
            <div class="col col--4">
              <div className="text--center">
                <Bridge className={styles.featureSvg} />
              </div>
              <div className="text--center padding-horiz--md">
                <h3>Overlay containers</h3>
                <p>Overlay Kubernetes cluster-internal services with you local container.</p>
              </div>
            </div>
            <div class="col col--4">
              <div className="text--center">
                <Bridge className={styles.featureSvg} />
              </div>
              <div className="text--center padding-horiz--md">
                <h3>Multi-Peer</h3>
                <p>Leverage development clusters for multiple developers at the same time.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx('hero', styles.lightBg)}>
          <div className={clsx('container')}>
            <div className="row">
              <div class="col col--2"></div>
              <div class="col col--4 text--center">
                <h2>Docker Desktop Extension</h2>
                <p>Gefyra provides a Docker Desktop Extension for even more simple usage.</p>
                <p>Connect your development containers directly to any Kubernetes cluster through Gefyra's Docker Desktop Extension user-interface.</p>
              </div>
              <div class="col col--4 text--center">
                <iframe width="440" height="247" src="https://www.youtube-nocookie.com/embed/EBArR1O2BGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout >
  );
}
