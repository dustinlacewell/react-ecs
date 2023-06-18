import './index.scss';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAnimationFrame, useECS } from '@react-ecs/core';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import { Example } from '../components/Example';
import { BoidExample } from '../scenes/BoidExample';
import styles from './index.module.scss';

const features = [
    {
        title: 'Easy to Use',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                Docusaurus was designed from the ground up to be easily
                installed and used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the
                chores. Go ahead and move your docs into the <code>docs</code>{' '}
                directory.
            </>
        ),
    },
    {
        title: 'Powered by React',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                Extend or customize your website layout by reusing React.
                Docusaurus can be extended while reusing the same header and
                footer.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.features)}>
            {imgUrl && (
                <div className="text--center">
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const ECS = useECS();

    useAnimationFrame((dt) => {
        ECS.update(dt);
    });

    const flip = (a) => a[Math.floor(Math.random() * a.length)];
    const example = flip([
        // <ParticleSystem cameraProps={{enableZoom: false}} />,
        <BoidExample cameraProps={{ enableZoom: false }} />,
        // <DOMParticles />
    ]);

    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Entity Component System for React!"
        >
            <Example
                collapsed={true}
                style={{
                    flex: 1,
                    marginBottom: 0,
                    border: 'none',
                    height: '100%',
                }}
            >
                <div style={{ height: '100vh' }}>{example}</div>
            </Example>
        </Layout>
    );
}

export default Home;
