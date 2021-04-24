import {
    useQuery,
    useSystem,
} from "@react-ecs/core";
import { ThreeView } from "@react-ecs/three";

import { Acceleration } from "../facets/Acceleration";
import { Velocity } from "../facets/Velocity";

export const MoveSystem = (props) => {
    const query = useQuery(e => e.hasAll(ThreeView, Velocity, Acceleration));

    return useSystem((dt: number) => {
        query?.loop([ThreeView, Velocity, Acceleration], (e, [view, velocity, acceleration]) => {
            const transform = view.object3d;

            if (velocity.amount.length() > 0) {
                const lookPos = transform.position.clone().add(velocity.amount);
                transform.lookAt(lookPos);
            }

            const newPosition = transform.position.clone().add(velocity.amount.clone().multiplyScalar(dt))
            velocity.amount.add(acceleration.amount);
            velocity.amount.clampLength(props.min, props.max)
            transform.position.copy(newPosition);
        });
    });
};
