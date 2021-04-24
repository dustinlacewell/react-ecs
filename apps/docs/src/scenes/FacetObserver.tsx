import {
    Entity,
    Facet,
    useAnimationFrame,
    useECS,
    useFacet,
    useQuery,
    useSystem
} from '@react-ecs/core';
import { observer } from 'mobx-react';
import React, { FC } from 'react';

class Counter extends Facet<Counter> {
    value?: number = 0;
    step?: number = 1;
}

const CounterSystem = () => {
    const query = useQuery(e => e.hasAll(Counter));

    return useSystem((dt: number) => {
        query.loop([Counter], (_, [counter]) => {
            counter.value -= 1;
        });
    });
};

const CounterObserver = observer(() => {
    const counter = useFacet(Counter);
    return <h1 style={{margin: 0, padding: 0}}>Counter: {counter.value}</h1>;
});

export const FacetObserver: FC = props => {
    const ECS = useECS();

    useAnimationFrame(ECS.update);

    return (
        <ECS.Provider>
            <CounterSystem />

            <Entity>
                <Counter />
                <CounterObserver />
            </Entity>
        </ECS.Provider>
    );
};
