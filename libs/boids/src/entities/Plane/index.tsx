import { Entity } from '@react-ecs/core';
import { ThreeView } from '@react-ecs/three';
import { GroupProps } from '@react-three/fiber';
import React, {
    ForwardedRef,
    forwardRef,
    ReactNode
} from 'react';

import {
    Acceleration,
    Neighbor,
    Velocity
} from '../../facets';

type PlaneProps = {
    render: () => ReactNode;
}

export const Plane = forwardRef((props: GroupProps & PlaneProps, ref: ForwardedRef<ReactNode>) => {
    const { render, ...groupProps } = props
    return (
        <Entity>
            <Neighbor />
            <Velocity />
            <Acceleration />
            <ThreeView>
                <group ref={ref} {...groupProps} dispose={null}>
                    {render()}
                </group>
            </ThreeView>
        </Entity>
    )
})
