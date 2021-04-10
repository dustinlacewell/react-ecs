import React, { FC } from 'react';

import { Vector3 } from 'three';

import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import {
  Entity,
  Facet,
  useECS,
  useQuery,
  useSystem,
  View
} from '../../../src';
import { ThreeStory } from './ThreeSetup';

export default {
    title: 'Three/SpinningCube',
    decorators: [ThreeStory]
};

class Spinning extends Facet<Spinning> {
    rotation = new Vector3(0, 0, 0);
}

const SpinningSystem = () => {
    const query = useQuery(e => e.hasAll(View, Spinning));

    return useSystem((dt: number) => {
        query.loop([View, Spinning], (e, [view, spin]) => {
            const transform = view.ref.current!;
            const rotation = spin.rotation.clone().multiplyScalar(dt);
            const newRotation = transform.rotation
                .toVector3()
                .add(rotation);
            transform.rotation.setFromVector3(newRotation);
        });
    });
};

const SpinningCube = () => {
    return (
        <Entity>
            <Spinning rotation={new Vector3(1, 1, 1)} />
            <View>
                <Box />
            </View>
        </Entity>
    );
};


export const SpinningCubeStory: FC = () => {
    const ECS = useECS();

    useFrame((_, dt) => ECS.update(dt));

    return (
        <ECS.Provider>
            <SpinningSystem />
            <SpinningCube />
        </ECS.Provider>
    );
};
