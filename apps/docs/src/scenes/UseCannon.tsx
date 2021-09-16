import {
    Entity,
    Facet,
    useAnimationFrame,
    useECS,
    useQuery,
    useSystem
} from '@react-ecs/core';
import { ThreeView } from '@react-ecs/three';
import {
    Physics,
    PublicApi,
    useBox,
    useCylinder,
    usePlane,
    useSphere
} from '@react-three/cannon';
import {
    Box,
    Cone,
    ContactShadows,
    Icosahedron,
    OrbitControls,
    PerspectiveCamera,
    Plane
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { button, useControls } from 'leva';
import React, { FC, useEffect, useRef } from 'react';
import { Raycaster, Vector3 } from 'three';

class PhysicsApi extends Facet<PhysicsApi> {
    api?: PublicApi;
}

function Ground(props) {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        ...props,
    }));
    return (
        <Entity>
            <ThreeView forwardRef={ref}>
                <Plane args={[100, 100]}>
                    <meshBasicMaterial color="white" />
                </Plane>
            </ThreeView>
        </Entity>
    );
}

function Cube(props) {
    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [0, 5, 0],
        ...props,
    }));
    useControls({
        'Bounce Cube': button(() => api.applyForce([0, 500, 0], [0, 0, 0])),
    });
    return (
        <Entity>
            <ThreeView forwardRef={ref}>
                <Box>
                    <meshBasicMaterial color={0x00ff00} />
                </Box>
            </ThreeView>
            <PhysicsApi api={api} />
        </Entity>
    );
}

function Ball(props) {
    const [ref, api] = useSphere(() => ({
        mass: 1,
        position: [0, 5, 2],
        ...props,
    }));
    useControls({
        'Bounce Ball': button(() => api.applyForce([0, 500, 0], [0, 0, 0])),
    });
    return (
        <Entity>
            <ThreeView forwardRef={ref}>
                <Icosahedron args={[1, 2]}>
                    <meshBasicMaterial color={0xff0000} />
                </Icosahedron>
            </ThreeView>
            <PhysicsApi api={api} />
        </Entity>
    );
}

function Diamond(props) {
    const [ref, api] = useCylinder(() => ({
        mass: 1,
        args: [0.1, 1, 1, 8],
        rotation: [Math.PI, 0, 0],
        position: [0, 5, 4],
        ...props,
    }));
    useControls({
        'Bounce Diamond': button(() => api.applyForce([0, 500, 0], [0, 0, 0])),
    });

    return (
        <Entity>
            <ThreeView forwardRef={ref}>
                <Cone>
                    <meshBasicMaterial color={0x0000ff} />
                </Cone>
            </ThreeView>
            <PhysicsApi api={api} />
        </Entity>
    );
}

export const MouseSystem = () => {
    const query = useQuery((e) => e.hasAll(PhysicsApi, ThreeView));
    const { gl, scene, camera, mouse } = useThree();
    const intersectPoint = new Vector3();
    const raycaster = useRef(new Raycaster());
    const isMouseDown = useRef(false);

    useEffect(() => {
        const onMouseDown = (/*event: MouseEvent*/) => {
            isMouseDown.current = true;
        };
        const onMouseUp = (/*event: MouseEvent*/) => {
            isMouseDown.current = false;
        };
        gl.domElement.addEventListener('pointerdown', onMouseDown);
        gl.domElement.addEventListener('pointerup', onMouseUp);
        return () => {
            // unsubscribe event
            gl.domElement.removeEventListener('pointerdown', onMouseDown);
            gl.domElement.removeEventListener('pointerup', onMouseUp);
        };
    }, [gl.domElement]);

    return useSystem((dt) => {
        raycaster.current.setFromCamera(mouse, camera);
        query.loop([ThreeView, PhysicsApi], (e, [view, physics]) => {
            const intersects = raycaster.current.intersectObject(view.object3d);
            if (intersects.length !== 0) {
                physics.api.applyForce([0, 20, 0], [0, 0, 0]);
            }
        });
    });
};

export const UseCannon: FC = () => {
    const ECS = useECS();
    useAnimationFrame(ECS.update);

    return (
        <Canvas>
            <OrbitControls />
            <PerspectiveCamera makeDefault position={[10, 4, 10]}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[1, 1, 1]} />
            </PerspectiveCamera>
            <ECS.Provider>
                <Physics>
                    <Cube />
                    <Ball />
                    <Diamond />
                    <ContactShadows
                        position={[0, 0, 0]}
                        width={20}
                        height={20}
                        far={20}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <Ground position={[0, -0.01, 0]} />
                </Physics>
                <MouseSystem />
            </ECS.Provider>
        </Canvas>
    );
};
