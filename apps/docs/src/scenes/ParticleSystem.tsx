import {
    ECSContext,
    Emitter,
    Entity,
    Facet,
    Tuple3,
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
import React, {
    FC,
    useContext
} from 'react';
import {
    Color,
    Mesh,
    MeshBasicMaterial,
    Vector3
} from 'three';

class Velocity extends Facet<Velocity> {
    velocity?= new Vector3(0, 0, 0);
}

class Lifetime extends Facet<Lifetime> {
    timeleft = 0;
}

const RandomColorSystem: FC = () => {
    useQuery(e => e.has(ThreeView), {
        added: ({ current }) => {
            const view = current.get(ThreeView);
            if (view) {
                const mesh = view.ref.current as Mesh;
                const material = mesh.material as MeshBasicMaterial;
                material.color?.set(
                    new Color(Math.random(), Math.random(), Math.random())
                );
            }
        }
    });

    return null;
};

const VelocitySystem: FC = props => {
    const query = useQuery(e => e.hasAll(ThreeView, Velocity));

    return useSystem((dt: number) => {
        query.loop([ThreeView, Velocity], (e, [view, motion]) => {
            const transform = view.ref.current;
            if (transform) {
                transform.position.add(
                    motion.velocity.clone().multiplyScalar(dt)
                );
            }
        });
    });
};

const GravitySystem: FC<{ gravity: Tuple3 }> = props => {
    const query = useQuery(e => e.hasAll(ThreeView, Velocity));

    return useSystem((dt: number) => {
        query.loop([ThreeView, Velocity], (e, [view, motion]) => {
            const transform = view.ref.current;
            if (transform) {
                const scaledGravity = new Vector3(
                    ...props.gravity
                ).multiplyScalar(dt);
                const adjustedVelocity = motion.velocity
                    .clone()
                    .add(scaledGravity);
                motion.velocity = adjustedVelocity;
            }
        });
    });
};

const LifetimeSystem: FC = props => {
    const { engine } = useContext(ECSContext);
    const query = useQuery(e => e.hasAll(Lifetime));

    return useSystem((dt: number) => {
        query.loop([Lifetime], (e, [lifetime]) => {
            lifetime.timeleft -= dt;

            if (lifetime.timeleft <= 0) {
                engine.removeEntity(e);
            }
        });
    });
};

export const ParticleSystem = (props) => {
    console.dir(props, { depth: null })
    const ECS = useECS();

    const { amount } = useControls('gravity', {
        amount: {
            value: { x: 0, y: -10, z: 0 }
        }
    })

    const { strength, lifetime, normalMaterial } = useControls('particles', {
        strength: {
            value: 10,
            min: .1,
        },
        lifetime: {
            value: 3,
            min: 0,
            max: 10,
        },
        normalMaterial: {
            value: false,
        }
    })

    useAnimationFrame((dt) => {
        ECS.update(dt);
    });

    return (
        <Canvas>
            <OrbitControls {...props.cameraProps} />
            <PerspectiveCamera makeDefault position={[0, 0, 8]}>
                <ambientLight intensity={.2} />
                <directionalLight position={[1, 1, 1]} />
            </PerspectiveCamera>

            <ECS.Provider>
                <LifetimeSystem />
                <VelocitySystem />
                <GravitySystem gravity={[amount.x, amount.y, amount.z]} />
                { !normalMaterial && <RandomColorSystem /> }

                <Emitter>
                    {() => {
                        const rnd = (s: number) => Math.random() * s - s * 0.5;
                        const randomVector = (s: number) =>
                            new Vector3(rnd(s), rnd(s), rnd(s));
                        return (
                            <Entity>
                                <Lifetime timeleft={lifetime} />
                                <Velocity velocity={randomVector(strength)} />
                                <ThreeView>
                                    <Box>
                                        { normalMaterial ? <meshNormalMaterial /> : <meshLambertMaterial />}
                                    </Box>
                                </ThreeView>
                            </Entity>
                        );
                    }}
                </Emitter>
            </ECS.Provider>
        </Canvas>
    );
};
