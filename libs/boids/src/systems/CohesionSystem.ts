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

type CohesionSystemProps = {
    amount: number;
}

export const CohesionSystem: FC<CohesionSystemProps> = (props) => {
    const query = useQuery(e => e.hasAll(ThreeView, Velocity, Neighbor));

    return useSystem((dt) => {
        query.loop([ThreeView, Neighbor, Velocity, Acceleration], (e, [view, neighbor, velocity, acceleration]) => {

            // current boid
            const o3d = view.object3d;

            const steering = new Vector3();

            const neighbors = neighbor.meta.neighbors;

            for (const other of neighbors) {
                steering.add(other.get(ThreeView).object3d.position)
            }

            if (neighbors.length) {
                steering.divideScalar(neighbors.length);
                steering.sub(o3d.position)
                steering.setLength(1);
                steering.sub(velocity.amount);
                steering.clampLength(0, .2)
            }

            acceleration.amount.add(steering)
        })
    })
}
