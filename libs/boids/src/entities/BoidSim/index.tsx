import { Plane } from "@react-ecs/boids";
import { Torus } from "@react-three/drei";
import { useControls } from "leva";
import React, {
    FC,
    ReactNode,
    Suspense,
    useMemo,
} from "react";

import { Teleporter } from "../../facets";
import {
    AlignSystem,
    CohesionSystem,
    MoveSystem,
    NeighborSystem,
    SeparationSystem,
} from "../../systems";

type BoidSimProps = {
    render: () => ReactNode;
}

export const BoidSim: FC<BoidSimProps> = (props) => {

    const { size, count, spawnHeight, neighborRadius, showBounds } = useControls('sim', {
        size: {
            value: 100,
            min: 20,
            max: 100,
        },
        count: {
            value: 200,
            min: 1,
            max: 200,
        },
        spawnHeight: {
            value: 1,
            min: 0,
            max: 1,
        },
        neighborRadius: {
            value: 15,
            min: 1,
            max: 25,
        },
        showBounds: false,
    }, {

    })

    const { alignment, cohesion, separation } = useControls('flocking', {
        alignment: {
            value: 1,
            min: 0,
            max: 2,
        },
        cohesion: {
            value: 1,
            min: 0,
            max: 2,
        },
        separation: {
            value: 1,
            min: 0,
            max: 2,
        },
    })

    const comp = () =>
        Math.random() * size * 2 - size;
    const pos = () =>
        [comp(), comp() * spawnHeight, comp()] as [number, number, number];
    const rot = () =>
        [0, Math.random() * Math.PI * 2, 0] as [number, number, number];

    const data = useMemo(() => {
        const items = [];
        for (let i = 0; i < count; i++) {
            items.push(
                <Suspense fallback={<Torus />}>
                    <Plane render={props.render} rotation={rot()} position={pos()} />
                </Suspense>,
            )
        }
        return items;
    }, [size, spawnHeight, count])


    return (
        <>
            <Teleporter showBounds={showBounds} size={size} />
            <NeighborSystem radius={neighborRadius} />
            <AlignSystem amount={alignment} />
            <CohesionSystem amount={cohesion} />
            <SeparationSystem amount={separation} />

            <MoveSystem />

            {data}
        </>

    )
}
