import { observer } from 'mobx-react';
import React, { FC } from 'react';

import {
  Entity,
  Facet,
  useAnimationFrame,
  useECS,
  useFacet,
  useQuery,
  useSystem,
} from '../../../src';

export default {
    title: 'Core',
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

const CounterAndColorSystem = () => {
    const query = useQuery(e => e.hasAll(Counter, Color));

    return useSystem((dt: number) => {
        query.loop([Counter, Color], (_: any, [counter, color]) => {
            counter.value -= 1;
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

export const MultiQueryStory: FC = props => {
    const ECS = useECS();

    useAnimationFrame(ECS.update);

    return (
        <ECS.Provider>
            <CounterAndColorSystem />

            <Entity>
                <Counter />
                <Color />

                <CounterDisplay />
            </Entity>
        </ECS.Provider>
    );
};
