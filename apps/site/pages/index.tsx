import {
    useAnimationFrame,
    useECS
} from '@react-ecs/core';
import { Torus } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import React, { Suspense } from 'react';

import { Instructions } from '../components/Instructions';
import { Viewcube } from '../lib/entities/Logo';
import { SpinSystem } from '../lib/systems/SpinSystem';
import { BoidScene } from '../scenes/BoidScene';

export function Index() {
    const ECS = useECS();

    useAnimationFrame((dt) => {
        ECS.update(Math.min(.2, dt))
    });

    return (
        <>
            <div id="logo">
                react-ecs
            </div>
            <div id="leva">
                <Leva collapsed fill />
            </div>
            <Instructions />
            <Canvas id={'main'} className={"three-root"}>
                <ECS.Provider>
                    <SpinSystem />
                    <Suspense fallback={<Torus />}>
                        <Viewcube />
                    </Suspense>
                    <Suspense fallback={<Torus />}>
                        <BoidScene />
                    </Suspense>
                </ECS.Provider>
            </Canvas>
        </>
    );
}

export default Index;
