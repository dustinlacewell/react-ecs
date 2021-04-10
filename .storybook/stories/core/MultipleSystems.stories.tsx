import React, { FC } from 'react';

import { observer } from 'mobx-react';

import {
  Entity,
  Facet,
  useAnimationFrame,
  useECS,
  useFacet,
  useQuery,
  useSystem
} from '../../../src';

export default {
    title: 'Core'
};

class Counter extends Facet<Counter> {
    value?: number = 0;
    step?: number = 1;
}

class Color extends Facet<Color> {
    r?: number = 255;
    g?: number = 255;
    b?: number = 255;
}

const CounterSystem = () => {
    const query = useQuery(e => e.hasAll(Counter));

    return useSystem((dt: number) => {
        query.loop([Counter], (_: any, [counter]) => {
            counter.value -= 1;
        });
    });
};

const RandomColorSystem = () => {
    const query = useQuery(e => e.has(Color));

    return useSystem((dt: number) => {
        query.loop([Color], (_: any, [color]) => {
            color.r = Math.floor(Math.random() * 255);
            color.g = Math.floor(Math.random() * 255);
            color.b = Math.floor(Math.random() * 255);
        });
    });
};

const CounterDisplay = observer(() => {
    const counter = useFacet(Counter);
    const rgb = useFacet(Color);
    const color = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    return <h1 style={{ color }}>Counter: {counter.value}</h1>;
});

export const MultipleSystemsStory: FC = props => {
    const ECS = useECS();

    useAnimationFrame(ECS.update);

    return (
        <ECS.Provider>
            <CounterSystem />
            <RandomColorSystem />

            <Entity>
                <Counter />
                <Color />

                <CounterDisplay />
            </Entity>
        </ECS.Provider>
    );
};
