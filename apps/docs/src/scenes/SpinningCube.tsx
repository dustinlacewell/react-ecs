import {
    Entity,
    Facet,
    rad,
    useAnimationFrame,
    useECS,
    useQuery,
    useSystem
} from '@react-ecs/core';
import { ThreeView } from '@react-ecs/three';
import {
    Box,
    OrbitControls,
    PerspectiveCamera
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { FC } from 'react';
import { Vector3 } from 'three';

class Spinning extends Facet<Spinning> {
    rotation = new Vector3(0, 0, 0);
}

const SpinningSystem = () => {
    const query = useQuery(e => e.hasAll(ThreeView, Spinning));

    return useSystem((dt: number) => {
        query.loop([ThreeView, Spinning], (e, [view, spin]) => {
            const transform = view.ref.current!;
            const rotation = spin.rotation.clone().multiplyScalar(dt);
            const newRotation = transform.rotation
                .toVector3()
                .add(rotation);
            transform.rotation.setFromVector3(newRotation);
        });
    });
};

const SpinCube = ({ amount }) => {
    return (
        <Entity>
            <Spinning rotation={new Vector3(amount.x, amount.y, amount.z)} />
            <ThreeView>
                <Box scale={3} rotation={[rad(45), rad(45), 0]}>
                    <meshLambertMaterial />
                </Box>
            </ThreeView>
        </Entity>
    );
};


export const SpinningCube: FC = () => {
    const ECS = useECS();
    useAnimationFrame(ECS.update);

    const { amount } = useControls('spin', {
        amount: {
            value: { x: 1, y: 1, z: 1},
        }
    })

    return (
        <Canvas>
            <OrbitControls />
            <PerspectiveCamera makeDefault position={[0, 0, 8]}>
                <ambientLight intensity={.2} />
                <directionalLight position={[1, 1, 1]} />
            </PerspectiveCamera>
            <ECS.Provider>
                <SpinningSystem />
                <SpinCube amount={amount} />
            </ECS.Provider>
        </Canvas>
    );
};
