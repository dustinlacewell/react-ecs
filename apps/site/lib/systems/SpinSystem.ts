import {
    useQuery,
    useSystem,
} from "@react-ecs/core";
import { ThreeView } from "@react-ecs/three";

import { Spin } from "../facets/Spin";

export const SpinSystem = () => {
    const query = useQuery(e => e.hasAll(ThreeView, Spin));

    return useSystem((dt: number) => {
        query?.loop([ThreeView, Spin], (e, [view, spin]) => {
            const transform = view.ref.current!;
            const rotation = spin.amount.clone().multiplyScalar(dt);
            const newRotation = transform.rotation
                .toVector3()
                .add(rotation);

            transform.rotation.setFromVector3(newRotation);
        });
    });
};
