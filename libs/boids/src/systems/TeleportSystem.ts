import {
    useQuery,
    useSystem
} from '@react-ecs/core';
import { ThreeView } from '@react-ecs/three';
import { FC } from 'react';

import { Velocity } from '../facets';

type TeleportSystemProps = {
    size: number;
}


export const TeleportSystem: FC<TeleportSystemProps> = (props) => {
    const query = useQuery(e => e.hasAll(ThreeView, Velocity))

    return useSystem((dt) => {
        query.loop([ThreeView], (e, [view]) => {
            const pos = view.object3d.position;

            if (pos.x < -props.size) {
                pos.setX(props.size);
            } else if (pos.x > props.size) {
                pos.setX(-props.size)
            }

            if (pos.y < -props.size) {
                pos.setY(props.size);
            } else if (pos.y > props.size) {
                pos.setY(-props.size)
            }

            if (pos.z < -props.size) {
                pos.setZ(props.size);
            } else if (pos.z > props.size) {
                pos.setZ(-props.size)
            }
        })
    })
}
