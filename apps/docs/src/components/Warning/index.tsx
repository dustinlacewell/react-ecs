import React from 'react';

import styles from './index.module.scss'


export const Warning = (props) => {
    return (
        <div className={styles.warning}>
            <span>{props.label || "Warning:"}</span>
            {props.children}
        </div>
    )
}
