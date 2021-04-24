import { BoidSim } from '@react-ecs/boids';
import {
    useAnimationFrame,
    useECS
} from '@react-ecs/core';
import {
    OrbitControls,
    Torus,
    useGLTF
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, {
    FC,
    Suspense
} from 'react';
import { Mesh } from 'three';

const LOGO_PATH = '/models/plane1.gltf';


export const BoidExample = (props) => {
    const ECS = useECS();

    useAnimationFrame(ECS.update)

    const { nodes } = useGLTF(LOGO_PATH);
    const geometry = (nodes.Regular_Plane as Mesh).geometry;

    return (
            <Canvas>
                <Suspense fallback={<Torus />}>
                    <ECS.Provider>
                        <fog attach="fog" args={['black', 25, 250]} />
                        <ambientLight intensity={.3} />
                        <directionalLight
                            color='red'
                            intensity={3}
                        />
                        <OrbitControls
                            enablePan
                            enableRotate
                            enableZoom
                            minDistance={80}
                            maxDistance={200}
                            maxPolarAngle={1.5}
                            {...props.cameraProps}
                        />

                        <BoidSim render={() =>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={geometry}>
                                <meshNormalMaterial />
                            </mesh>
                        } />
                    </ECS.Provider>
                </Suspense>
            </Canvas>
    )
}

useGLTF.preload(LOGO_PATH)
