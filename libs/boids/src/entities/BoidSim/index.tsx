import { Plane } from '@react-ecs/boids';
import { Torus } from '@react-three/drei';
import { useControls } from 'leva';
import React, {
    FC,
    ReactNode,
    Suspense,
    useMemo
} from 'react';

import { Teleporter } from '../../facets';
import {
    AlignSystem,
    CohesionSystem,
    MoveSystem,
    NeighborSystem,
    SeparationSystem
} from '../../systems';

type BoidSimProps = {
    render: () => ReactNode;
}

export const BoidSim: FC<BoidSimProps> = (props) => {

    const { size, count, spawnHeight, neighborRadius, showBounds } = useControls('sim', {
        size: {
            value: 100,
            min: 20,
            max: 200,
        },
        count: {
            value: 250,
            min: 1,
            max: 250,
        },
        spawnHeight: {
            value: 1,
            min: 0,
            max: 1,
        },
        neighborRadius: {
            value: 10,
            min: 1,
            max: 50,
        },
        showBounds: false,
    }, {

    })

    const alignment = useControls('alignment', {
        enabled: true,
        multiplier: {
            value: .1,
            min: 0,
            max: 1,
        },
        turningRange: {
            value: [0, .1],
            min: 0,
            max: 1,
        },
    });

    const cohesion = useControls('cohesion', {
        enabled: true,
        multiplier: {
            value: 1,
            min: 0,
            max: 1,
        },
        speedRange: {
            value: [0, 1],
            min: 0,
            max: 10,
        },
    })

    const separation = useControls('separation', {
        enabled: true,
        multiplier: {
            value: 2,
            min: 0,
            max: 2,
        },
        speedRange: {
            value: [0, 3],
            min: 0,
            max: 10,
        },
    })

    const speed = useControls('speed', {
        range: {
            value: [15, 50],
            min: 0,
            max: 50,
        },
    })

    const comp = () =>
        Math.random() * size * 2 - size;
    const pos = () =>
        [comp(), comp() * spawnHeight, comp()] as [number, number, number];

    const data = useMemo(() => {
        const items = [];
        for (let i = 0; i < count; i++) {
            items.push(
                <Suspense fallback={<Torus />}>
                    <Plane render={props.render} position={pos()} />
                </Suspense>,
            )
        }
        return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size, spawnHeight, count])


    return (
        <>
            <Teleporter showBounds={showBounds} size={size} />
            <NeighborSystem radius={neighborRadius} />

            <AlignSystem
                amount={alignment.enabled ? alignment.multiplier : 0}
                min={alignment.turningRange[0]}
                max={alignment.turningRange[1]} />

            <CohesionSystem
                amount={cohesion.enabled ? cohesion.multiplier : 0}
                min={cohesion.speedRange[0]}
                max={cohesion.speedRange[1]}
                />

            <SeparationSystem
                amount={separation.enabled ? separation.multiplier : 0}
                min={separation.speedRange[0]}
                max={separation.speedRange[1]} />

            <MoveSystem min={speed.range[0]} max={speed.range[1]} />

            {data}
        </>

    )
}
