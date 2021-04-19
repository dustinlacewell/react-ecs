import "@fortawesome/fontawesome-free";
import "./site.scss";

import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import GithubCorner from "react-github-corner";

import styles from "./app.module.scss";

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>react-ecs</title>
            </Head>
            <div className={styles.root}>
                <main>
                    <Component {...pageProps} />
                </main>
                <GithubCorner
                    className={styles.corner}
                    octoColor="black"
                    bannerColor="white"
                    href="https://github.com/dustinlacewell/react-ecs"
                />
            </div>
        </>
    );
}

export default CustomApp;
