import BrowserOnly from '@docusaurus/BrowserOnly';
import { Leva } from 'leva';
import React, { Suspense } from 'react';

import { Codeblock } from '../Codeblock';
import styles from './index.module.scss';

export const Example = (props) => {
    return (
        <div style={{
            flex: 1,
            display: 'flex',
            alignItems: "stretch",
            flexDirection: "column"
        }}>
            <div className={styles.leva} style={{
                top: "75px",
                display: props.hideControls ? "none" : "block"
            }}>
                <Leva fill collapsed={props.collapsed} />
            </div>

            <div className={styles.example} style={{
                marginBottom: "1em",
                position: "relative",
                overflow: "hidden",
                padding: "1em",
                ...(props.style || {}),
            }}>
                <BrowserOnly fallback={<div />}>
                    {() => <Suspense fallback={<div />}>{props.children}</Suspense>}
                </BrowserOnly>
            </div>
            {props.code && <Codeblock code={props.code} />}
        </div>
    )

}
