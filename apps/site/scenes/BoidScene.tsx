import { BoidSim } from "@react-ecs/boids";
import {
    OrbitControls,
    useGLTF,
} from "@react-three/drei";
import { useControls } from "leva";
import React, { FC } from "react";
import { Mesh } from "three";

const LOGO_PATH = '/models/plane1.gltf';


export const BoidScene: FC = (props) => {
    const { nodes } = useGLTF(LOGO_PATH);
    const geometry = (nodes.Regular_Plane as Mesh).geometry;

    const { fogNear, fogFar } = useControls('fog', {
        fogNear: {
            value: 25,
            min: 10,
            max: 150,
        },
        fogFar: {
            value: 250,
            min: 30,
            max: 300,
        },
    })

    const { autoSpin, spinSpeed } = useControls('camera', {
        autoSpin: true,
        spinSpeed: {
            value: .5,
            min: 0,
            max: 3,
        },
    })

    return (
        <>
            <fog attach="fog" args={['black', fogNear, fogFar]} />
            <ambientLight intensity={.1} />
            <directionalLight
                color='red'
                intensity={3}
            />
            <OrbitControls
                enablePan
                enableRotate
                autoRotate={autoSpin}
                autoRotateSpeed={spinSpeed}
                minDistance={80}
                maxDistance={300}
                maxPolarAngle={1.5}
            />

            <BoidSim render={() =>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={geometry}>
                    <meshPhongMaterial />
                </mesh>
            } />
        </>
    )
}


useGLTF.preload(LOGO_PATH)
