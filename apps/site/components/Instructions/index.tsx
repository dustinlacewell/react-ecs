import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

import styles from "./styles.module.scss";

export const Instructions: FC = (props) => {
    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                $&gt; yarn add @react-ecs/core
            </div>
            <button><FontAwesomeIcon icon={faCopy} /></button>
        </div>
    )
}
