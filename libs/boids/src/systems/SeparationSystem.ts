import {
    useQuery,
    useSystem,
} from "@react-ecs/core";
import { ThreeView } from "@react-ecs/three";
import { FC } from "react";
import { Vector3 } from "three";

import {
    Acceleration,
    Neighbor,
    Velocity,
} from "../facets";

type SeparationSystemProps = {
    amount: number
    min: number
    max: number
}

export const SeparationSystem: FC<SeparationSystemProps> = (props) => {
    const query = useQuery(e => e.hasAll(ThreeView, Velocity, Neighbor));

    return useSystem((dt) => {
        query.loop([ThreeView, Neighbor, Velocity, Acceleration], (e, [view, neighbor, velocity, acceleration]) => {

            // current boid
            const o3d = view.object3d;

            const steering = new Vector3();

            const neighbors = neighbor.meta.neighbors;

            for (const other of neighbors) {
                const otherPosition = other.get(ThreeView).object3d.position
                const dist = o3d.position.distanceTo(otherPosition);
                const diff = o3d.position.clone().sub(otherPosition)
                diff.divideScalar(dist * dist)
                steering.add(diff)
            }

            if (neighbors.length) {
                steering.divideScalar(neighbors.length);
                steering.sub(velocity.amount);
                steering.clampLength(props.min, props.max);
                steering.multiplyScalar(props.amount);
            }

            acceleration.amount.add(steering);
        });
    })
};
