---
title: Hooks
sidebar_label: Hooks
sidebar_position: 5
---

import { Warning } from '../../src/components/Warning'

This page has a short description of all available hooks. For more information check the [API Documentation](/api/core/#functions).

## useAnimationFrame(number => void)

Registers a callback with [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) as convenience.

```ts
useAnimationFrame((dt) => console.log(`Last frame took ${dt} seconds.`));
```

[useAnimationFrame](/api/core/functions/useanimationframe) is a good way to drive [ECS.update](/api/core/classes/ecs#update):

```tsx
const CoolSim = () => {
    const ECS = useECS();
    useAnimationFrame(ECS.update);
};
```

See the [API Documentation](/api/core/functions/useanimationframe) for more information.

## useECS() => ECS

Returns an [ECS](/api/core/classes/ecs) instance.

See the [API Documentation](/api/core/functions/useecs) and [Creating an ECS](/docs/core/creating_an_ecs) for more information.

## useEngine() => Engine

Returns the [Engine](https://github.com/mayakwd/tick-knock#engine) instance from the nearest [ECS.Provider](/api/core/classes/ecs#provider) context.

See the [API Documentation](/api/core/functions/useengine) and [Processing Entities](/docs/core/systems_and_queries#processing-entities).

## useEntity() => Entity

Returns the nearest [Entity](/api/core/classes/entity) instance.

This will mostly be useful for implementing complex facets like [DOMView](/api/core/classes/domview).

See the [API Documentation](/api/core/functions/useentity) for more information.

## useFacet(Facet&lt;T&gt;) => T

Returns an instance of the passed facet class for the nearest entity.

This will mostly be useful for implementing complex facets like [DOMView](/api/core/classes/domview).

See the [API Documentation](/api/core/functions/usefacet) for more information.

## useQuery(Entity => boolean) => Query

Returns [Query](/api/core/classes/query) newly registered with the [Engine](https://github.com/mayakwd/tick-knock#engine) of the nearest [ECS.Provider](/api/core/classes/ecs#provider).

The passed predicate dictates which [Entities](/api/core/classes/entity) the query matches.

<Warning label="Tip">

As the set of entities that match the query changes, this hook will cause component re-rendering.

</Warning>

See the [API Documentation](/api/core/functions/usequery) for more information.

## useStatefulRef(T) => [T, (T) => void]

A utility hook that combines [useRef](https://reactjs.org/docs/hooks-reference.html#useref) and [useState](https://reactjs.org/docs/hooks-reference.html#usestate).

Which means:

-   It's initial value is evaluated only once, at component construction (useRef)
-   Changing its value causes component re-render (useState)

See the [API Documentation](/api/core/functions/usestatefulref) for more information.

## useSystem(number => void, number = 0) => null

Register a callback with the [Engine](https://github.com/mayakwd/tick-knock#engine) of the nearest [ECS.Provider](/api/core/classes/ecs#provider). An optional second parameter allows you to control the ordering priority.

See the [API Documentation](/api/core/functions/usesystem) and [Systems and Queries](/docs/core/systems_and_queries) for more information.

## useTimer(number, () => void)

Registers a callback to be called every number of seconds instead of every update.

See the [API Documentation](/api/core/functions/usetimer) for more information.
