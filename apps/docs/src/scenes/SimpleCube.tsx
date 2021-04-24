import {
    Entity,
    rad,
    useECS,
} from '@react-ecs/core';
import { ThreeView } from '@react-ecs/three';
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { FC } from 'react';

const Cube = () => {
    return (
        <Entity>
            <ThreeView>
                <Box scale={3} rotation={[rad(45), rad(45), 0]}>
                    <meshLambertMaterial />
                </Box>
            </ThreeView>
        </Entity>
    );
};

export const SimpleCube: FC = () => {
    const ECS = useECS();
    return (
        <Canvas>
            <OrbitControls />
            <PerspectiveCamera makeDefault position={[0, 0, 8]}>
                <ambientLight intensity={.2} />
                <directionalLight position={[1, 1, 1]} />
            </PerspectiveCamera>
            <ECS.Provider>
                <Cube />
            </ECS.Provider>
        </Canvas>
    );
};
