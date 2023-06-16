import {
    DOMView,
    Emitter,
    Entity,
    Facet,
    useAnimationFrame,
    useECS,
    useEngine,
    useQuery,
    useSystem
} from '@react-ecs/core';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { Vector2 } from 'three';

class Mass extends Facet<Mass> { }

class Lifetime extends Facet<Lifetime> {
    timeleft?= 1;
}

class Position extends Facet<Position> {
    location?= new Vector2(0, 0)
}

class Velocity extends Facet<Velocity> {
    amount?= new Vector2(0, 0)
}

const LifetimeSystem = () => {
    const engine = useEngine()
    const query = useQuery(e => e.has(Lifetime));

    return useSystem((dt: number) => {
        query.loop([Lifetime], (e, [lifetime]) => {
            lifetime.timeleft -= dt;

            if (lifetime.timeleft <= 0) {
                engine.removeEntity(e);
            }
        });
    });
};

const PhysicsSystem = () => {
    const query = useQuery(e => e.hasAll(Position, Velocity))

    return useSystem((dt) => {
        query.loop([Position, Velocity], (e, [pos, vel]) => {
            pos.location = pos.location.clone().add(vel.amount)
        })
    })
}

const GravitySystem = ({ vector }) => {
    const query = useQuery(e => e.hasAll(Mass, Velocity))

    return useSystem((dt) => {
        query.loop([Velocity], (e, [vel]) => {
            vel.amount = vel.amount.clone().add(vector.clone().multiplyScalar(dt));
        })
    })
}

const DOMViewSystem = () => {
    const query = useQuery(e => e.hasAll(DOMView, Position))

    return useSystem((dt) => {
        query.loop([DOMView, Position], (e, [view, pos]) => {
            view.element.style.left = `${pos.location.x}px`;
            view.element.style.top = `${pos.location.y}px`;
        });
    })
}

export const DOMParticles = () => {
    const ECS = useECS();
    useAnimationFrame(ECS.update);

    const containerRef = useRef<HTMLDivElement>();

    const { sizeRange, offset, delay, strength, gravity, lifetime } = useControls('particles', {
        sizeRange: {
            value: [16, 32],
            min: 1,
            max: 256,
        },
        offset: {
            value: 50,
            max: 300,
            min: 20,
        },
        delay: {
            value: .05,
            min: 0.01,
            max: .2
        },
        strength: {
            value: 10,
            min: 1,
            max: 50
        },
        gravity: {
            value: { x: 0, y: 10 }
        },
        lifetime: {
            value: [1, 3],
            min: .1,
            max: 5,
        }
    })

    const rnd = (s: number) =>
        Math.random() * s - s * 0.5;
    const randomVector = (s: number) =>
        new Vector2(rnd(s), rnd(s));
    const rndPos = () => {
        const container = containerRef.current;

        const containerPos =
            container ? new Vector2(
                container.offsetWidth / 2,
                container.offsetHeight / 2,
            ) : new Vector2(0, 0);

        randomVector(offset).add(containerPos);
    };

    return (
        <div ref={containerRef}>
            <ECS.Provider>
                <LifetimeSystem />
                <PhysicsSystem />
                <GravitySystem vector={new Vector2(gravity.x, gravity.y)} />
                <DOMViewSystem />

                <Emitter emissionDelay={delay}>
                    {() => {
                        const size = sizeRange[0] + (Math.random() * sizeRange[1])
                        const pos = rndPos().subScalar(size / 2)
                        return (
                            <Entity>
                                <Mass />
                                <Lifetime timeleft={lifetime[0] + Math.random() * lifetime[1]} />
                                <Position location={pos} />
                                <Velocity amount={randomVector(strength)} />
                                <DOMView>
                                    <img
                                        style={{
                                            position: 'absolute',
                                            left: pos.x,
                                            top: pos.y,
                                            width: size,
                                            height: size
                                        }}
                                        alt="smiley face"
                                        src="https://i.imgur.com/kFjaH5l.png" />
                                </DOMView>
                            </Entity>
                        );
                    }}
                </Emitter>
            </ECS.Provider>
        </div>
    )
}
