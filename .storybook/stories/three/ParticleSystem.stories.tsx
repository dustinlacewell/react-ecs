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

import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import {
  Emitter,
  Entity,
  Facet,
  useECS,
  useQuery,
  useSystem,
  View
} from '../../../src';
import { ECSContext } from '../../../src/components/ECS';
import { Tuple3 } from '../../../src/utils';
import { ThreeStory } from './ThreeSetup';

export default {
    title: 'Three/ParticleSystem',
    decorators: [ThreeStory]
};

class Velocity extends Facet<Velocity> {
    velocity? = new Vector3(0, 0, 0);
}

class Lifetime extends Facet<Lifetime> {
    timeleft = 0;
}

const RandomColorSystem: FC = () => {
    useQuery(e => e.has(View), {
        added: ({ current }) => {
            const view = current.get(View);
            if (view) {
                const mesh = view.ref.current as Mesh;
                const material = mesh.material as MeshBasicMaterial;
                material.color.set(
                    new Color(Math.random(), Math.random(), Math.random())
                );
            }
        }
    });

    return null;
};

const VelocitySystem: FC = props => {
    const query = useQuery(e => e.hasAll(View, Velocity));

    return useSystem((dt: number) => {
        query.loop([View, Velocity], (e, [view, motion]) => {
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
    const query = useQuery(e => e.hasAll(View, Velocity));

    return useSystem((dt: number) => {
        query.loop([View, Velocity], (e, [view, motion]) => {
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

export const ParticleSystemStory: FC = () => {
    const ECS = useECS();

    useFrame((_, dt) => {
        ECS.update(dt);
    });

    return (
        <>
            <ECS.Provider>
                <LifetimeSystem />
                <VelocitySystem />
                <GravitySystem gravity={[0, -10, 0]} />
                <RandomColorSystem />

                <Emitter>
                    {() => {
                        const rnd = (s: number) => Math.random() * s - s * 0.5;
                        const randomVector = (s: number) =>
                            new Vector3(rnd(s), rnd(s), rnd(s));
                        return (
                            <Entity>
                                <Lifetime timeleft={3} />
                                <Velocity velocity={randomVector(10)} />
                                <View>
                                    <Box />
                                </View>
                            </Entity>
                        );
                    }}
                </Emitter>
            </ECS.Provider>
        </>
    );
};
