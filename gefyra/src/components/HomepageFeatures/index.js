import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        icon: 'img/deadline.svg',
        title: 'Supercharge Development Speed',
        description: (
            <>
                Run your code directly in a Kubernetes cluster and overcome <strong>CI/CD waiting times</strong>.
            </>
        ),
    },
    {
        icon: 'img/sweat.svg',
        title: 'Fight Environment Bugs',
        description: (
            <>
                Uncover bugs <strong>before</strong> they appear on staging or production enviroments.
            </>
        ),
    },
    {
      icon: 'img/team.svg',
      title: 'Promote Collaboration',
      description: (
          <>
              Share <strong>running code instantly</strong> and let your team work in a realistc environment.
          </>
      ),
    },
    {
        icon: 'img/play-button.svg',
        title: 'One Click and Go',
        description: (
            <>
                Gefyra is <strong>ready in seconds</strong>, not hours or days.
            </>
        ),
    },
    {
      icon: 'img/link.svg',
      title: 'Flexible Workflows',
      description: (
          <>
              Integrate Gefyra <strong>into existing workflows</strong>. Make Gefyra part of your CI/CD pipeline.
          </>
      ),
    },
    {
        icon: 'img/budget.svg',
        title: 'Cost Efficient',
        description: (
            <>
                Improve time-to-market and utilization of resources. Spent <strong>less</strong> on CI/CD pipelines and container builds.
            </>
        ),
    },

];

function Feature({ Svg, icon, title, description }) {
    return (
        <div className={clsx('col col--4', styles.item)}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
                <img src={icon} alt="" height="100px" />
                <h4>{title}</h4>
                <p style={{fontSize: '1.2rem'}}>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
            <div className="container">
            <div className={clsx(styles.center)}>
                <h2 className={clsx(styles.sectionHeading)}><strong>Why Gefyra?</strong></h2>
            </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
    );
}
