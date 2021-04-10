import React, { FC } from 'react';

import {
  Entity,
  Facet,
  useAnimationFrame,
  useECS,
  useQuery,
  useSystem
} from '../../../src/';

export default {
    title: 'Core'
};

class Counter extends Facet<Counter> {
    value?: number = 0;
    step?: number = 1;
}

const CounterSystem = () => {
    const query = useQuery(e => e.hasAll(Counter));

    return useSystem((dt: number) => {
        query.loop([Counter], (_: any, [counter]) => {
            console.log((counter.value -= 1));
        });
    });
};

export const EngineStory: FC = props => {
    const ECS = useECS();

    useAnimationFrame(ECS.update);

    return (
        <ECS.Provider>
            <CounterSystem />

            <Entity>
                <Counter />
            </Entity>

            <h1>Check console.</h1>
        </ECS.Provider>
    );
};
