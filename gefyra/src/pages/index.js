import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import LanguageGrid from '@site/src/components/LanguageGrid';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RunAnimation from '@site/src/components/RunAnimation';


const Logo = require('@site/static/img/gefyra_vertical_logo.svg').default

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner, styles.lightBg)}>
      <div className="container">
        <Logo />
        <p className={clsx('subtitle')}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>

          <Link
            className="button button--primary button--lg"
            style={{ "marginRight": "20px" }}
            to="/docs/getting-started/">
            Let's try Gefyra
          </Link>
          <Link
            className="button button--primary button--lg"
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
      title={`Hello from ${siteConfig.title}`}
      description="Gefyra, a tool for local Kubernetes development">
      <HomepageHeader />
      <main>

        <section className={clsx(styles.singleItemSection)}>
          <div className={clsx('container', styles.sectionSideBySide)} style={{ display: 'flex', flex: 'flex: 0 2 auto', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
            <div style={{ maxWidth: '500px', verticalAlign: 'text-top' }}>
              <h3 className={clsx(styles.sectionHeading)}><strong>The Problem</strong></h3>
              <p className={clsx(styles.sideBySideContentText)}>
                Building and pushing containers to test them in Kubernetes is <strong>repetitive and time-consuming</strong>. Writing and debugging code that depends on services in Kubernetes is daunting. <strong>Especially if they are not reachable</strong> during development.
              </p>
            </div>
            <div style={{ maxWidth: '500px', verticalAlign: 'text-top' }}>
              <h3 className={clsx(styles.sectionHeading)}><strong>The Solution</strong></h3>
              <p className={clsx(styles.sideBySideContentText)}>
                <strong>Gefyra</strong> runs local code in any Kubernetes cluster <strong>without the build and push cycle</strong>. It overlays containers in the cluster making code changes immediately available. It's a new era of software development.

              </p>
            </div>
            <br />

          </div>
          <div className={clsx(styles.center)}>
            <Link
              className={clsx("button button--secondary button--lg", styles.center)}
              to="https://github.com/gefyrahq/gefyra">
              We're open source
            </Link>
          </div>
        </section>

        <hr style={{ "margin": "0" }} />

        <section className={clsx(styles.singleItemSection, styles.section, styles.ornamentSection)}>
          <HomepageFeatures />
        </section>

        <hr style={{ "margin": "0" }} />
        <div className={clsx(styles.lightBg)} style={{ "paddingTop": "25px" }}>
          <div className={clsx('container')}>
            <section className={clsx(styles.sectionSideBySide)}>

              <div className={clsx(styles.sideBySideContent)}>
                <h2 className={clsx(styles.sectionHeading)}>Docker Desktop Extension</h2>
                <p className={clsx(styles.sideBySideContentText)}>Gefyra provides a <strong>Docker Desktop Extension</strong> for even more simple usage.</p>
                <p className={clsx(styles.sideBySideContentText)}>Connect your development containers directly to any Kubernetes cluster through Gefyra's Docker Desktop Extension user interface.</p>
                <Link
                  className={clsx("button button--secondary button--lg", styles.center)}
                  to="https://www.docker.com/blog/building-a-local-application-development-environment-for-kubernetes-with-the-gefyra-docker-extension/">
                  Check it out
                </Link>
              </div>
              <figure className={clsx(styles.sectionFigure)}>
                <iframe width="540" height="305" src="https://www.youtube-nocookie.com/embed/EBArR1O2BGk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </figure>

            </section>
          </div>
        </div>

        <hr style={{ "marginTop": "0" }} />

        <section>
          <div className={clsx(styles.section)}>
            <h2 className={clsx(styles.sectionHeading)}>Gefyra Usecases</h2>
          </div>
        </section>
        <div className='container'>
          <section className={clsx(styles.sectionSideBySide)}>
            <div className={clsx(styles.sideBySideContent)}>
              <h3 style={{ fontSize: '1.5rem', fontStyle: 'bold' }}>Kubernetes as Development Platform</h3>
              <p className={clsx(styles.sideBySideContentText)}>
                Local containers on board! If you want to use Kubernetes as your development platform, Gefyra is the right tool for you. It <strong>enables you to run your code in Kubernetes</strong> without the need to build and push containers. Gefyra overlays the container in Kubernetes with <strong> your local container</strong>. Instantly see the <strong>effects of your code changes</strong> in Kubernetes.
              </p>
              <p className={clsx(styles.sideBySideContentText)}>
                The highest possible development velocity is achieved by using Gefyra in combination with a <strong>local or remote Kubernetes cluster</strong>.
              </p>
              <Link
                className={clsx("button button--secondary button--lg", styles.center)}
                to="https://www.blueshoe.io/blog/alternative-to-telepresence-2-gefyra/">
                See Gefyra in Action
              </Link>
            </div>
            <RunAnimation size="500" />
          </section>
        </div>
        {/* colab */}
        <div className='container'>
          <section className={clsx(styles.sectionSideBySide, styles.sideBySideReversed)}>
            <div className={clsx(styles.sideBySideContent)}>
              <h3 style={{ fontSize: '1.5rem', fontStyle: 'bold' }}>Shared Kubernetes-based Resources </h3>
              <p className={clsx(styles.sideBySideContentText)}>
                Suppose you are working on a feature that requires collaboration with other team members, such as frontend developers, backend engineers, and database administrators. With Gefyra, you can <strong>create a shared environment accessible to the entire team</strong>. </p>
              <p className={clsx(styles.sideBySideContentText)}>
                Each team member can work on their respective components while having shared resources available (for example a large database). Gefyra <strong>enables you to share your local code with your team</strong> and <strong>collaborate on a shared environment</strong>.
              </p>
              <Link
                className={clsx("button button--secondary button--lg", styles.center)}
                to="#">
                Kickoff the Collaboration
              </Link>
            </div>
            <figure className={clsx(styles.sectionFigure)}>
              <img src="https://placehold.co/500x400" alt="collaboration with gefyra" />
            </figure>
          </section>
        </div>
        {/* langauge grid */}
        <div className='container'>
          <section className={clsx(styles.sectionSideBySide)}>
            <div className={clsx(styles.sideBySideContent)}>
              <h3 style={{ fontSize: '1.5rem', fontStyle: 'bold' }}>All Programming Languages and Frameworks</h3>
              <p className={clsx(styles.sideBySideContentText)}>
                If it can run in a container, you can develop it in a container. Gefyra <strong>supports all platforms</strong> that support Docker, and <strong>all programming languages and frameworks</strong> that can be run in a container.
              </p>
              <p className={clsx(styles.sideBySideContentText)}>
                Find one of our <strong>example projects</strong> for container-based development with Gefyra and get started in no time. Be a Dev/Prod-parity hero!
              </p>
            </div>
            <LanguageGrid />
          </section>
        </div>

        <hr style={{ "margin": "0" }} />

        <section className={clsx(styles.singleItemSection, styles.section, styles.lightBg)}>
          <div className={clsx('container')}>
            <h3 className={clsx(styles.sectionHeading)}>Let us know about your experience!</h3>
            <p className={clsx(styles.sideBySideContentText)}>We depend on your feedback - Gefyra's was created out of our own needs and the feedback we received from you, and our community.</p>
            <p className={clsx(styles.sideBySideContentText)}>We'd appreciate it if you could take 2 minutes of your time to fill out our <strong>feedback form</strong>.</p>
            <Link
              className={clsx("button button--secondary button--lg", styles.center)}
              to="https://forms.gle/AWT9NparpTVk8E978">
              Give feedback
            </Link>
          </div>
        </section>

      </main>
    </Layout >
  );
}
