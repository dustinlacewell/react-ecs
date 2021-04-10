import React, { FC } from 'react';

import { Box } from '@react-three/drei';

import {
  Entity,
  useECS,
  View
} from '../../../src';
import { ThreeStory } from './ThreeSetup';

export default {
    title: 'Three/Cube',
    decorators: [ThreeStory]
};

const Cube = () => {
    return (
        <Entity>
            <View>
                <Box />
            </View>
        </Entity>
    );
};

export const CubeStory: FC = () => {
    const ECS = useECS();
    return (
        <ECS.Provider>
            <Cube />
        </ECS.Provider>
    );
};
