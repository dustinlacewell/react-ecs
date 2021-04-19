import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import FitText from 'react-fittext';

import styles from './styles.module.scss';

export const Instructions: FC = (props) => {
    return (
        <div className={styles.outer}>
            <FitText compressor={1.3}>
                <div className={styles.inner}>
                    <div>$&gt; yarn add @react-ecs/core</div>
                </div>
            </FitText>
            <button>
                <FontAwesomeIcon icon={faCopy} />
            </button>
        </div>
    );
};
