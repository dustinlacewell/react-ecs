---
title: Systems and Queries
sidebar_label: Systems and Queries
sidebar_position: 3
---

import { Warning } from '../../src/components/Warning'

## Systems

[Entities](/api/core/classes/entity) are just collections of [Facets](/api/core/classes/facet) which only contain data.

[Systems](/api/core/types/system) provide all the behavior of your ECS.

### Defining Systems

Use the [useSystem](/api/core/functions/usesystem) hook to define a new system. It takes a callback that is called every time [ECS.update](/api/core/classes/ecs#update) is called.

```tsx
const PrintFrameTimeSystem = () => {
    return useSystem((dt) => {
        console.log(`Last frame took ${dt} seconds.`);
    });
};
```

<Warning label="Tip">

[useSystem](/api/core/functions/usesystem) returns `null` so you can return _it_, to keep your system components tidy.

</Warning>

#### System Priorities

By default, all systems have a priority of `0` and are called in the order of your [useSystem](/api/core/functions/usesystem) calls.

Pass a priority as the second parameter (lower is first) to override this behavior:

```tsx
useSystem((dt) => console.log("I'm called second."), 1);
useSystem((dt) => console.log("I'm called first."), 0);
```

### Using Systems

To use a system just include it anywhere within the context of an [ECS.Provider](/api/core/classes/ecs#provider):

```tsx
<ECS.Provider>
    <PrintFrameTimeSystem />
    <GravitySystem vector={[0, -9.8, 0]}>
    {/* ... */}
</ECS.Provider>
```

<Warning label="Tip">

Systems don't need to appear as direct children of [ECS.Provider](/api/core/classes/ecs#provider). Organize things however you'd like.

</Warning>

### Processing Entities

The [useEngine](/api/core/functions/useEngine) hook can be used to access all [Entities](/api/core/classes/entity) with your [ECS](/api/core/classes/ecs):

```tsx
const CoolSim = () => {
    const engine = useEngine();
    return useSystem((dt) => {
        for (const entity of engine.entities) {
            // ...
        }
    });
};
```

<Warning>

Like with most things, The [useEngine](/api/core/functions/useengine) hook must be used within the context of an [ECS.Provider](/api/core/classes/ecs#provider).

</Warning>

## Queries

[Queries](/api/core/classes/query) keep track of which [Entities](/api/core/classes/entity) which have a specific set of [Facets](/api/core/classes/facet).

### Creating Queries

Use the [useQuery](/api/core/functions/usequery) hook:

```tsx
const PoisonSystem = () => {
    const query = useQuery((e) => e.hasAll(Health, PoisonStatus));
    return useSystem((dt) => {
        for (const entity of query.entities) {
            // ...
        }
    });
};
```

It takes a predicate function that should return `true` if the passed [Entity](/api/core/classes/entity) has the desired [Facets](/api/core/classes/facet).

<Warning label="Tip">

Anytime an [Entity](/api/core/classes/entity) is added or removed from the query, it will re-render the component.

</Warning>

### Query Entities

Every [Query](/api/core/classes/query) has a [.entities](/api/core/classes/query#entities) property that contains all the entities matched by the query.

However, there is also the [Query.loop](/api/core/classes/query#loop) method:

```tsx
const PoisonSystem = () => {
    const query useQuery((e) => e.hasAll(IsEnemy, Health, PoisonStatus));
    return useSystem((dt) => {
        query.loop([Health, PoisonStatus], (e, [health, poison]) => {
            health.current -= poison.amount;
        })
    })
}
```

[Query.loop](/api/core/classes/query#loop) takes two arguments:

-   a [tuple](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-3.html#tuple-types) of [Facets](/api/core/classes/facet) types you're interested in.
-   a function called for every entity matched by the query.

The callback receives two arguments:

-   an entity
-   the facet instances of that entity, that you requested with the tuple of types

In the example above, the query matches all entities with the `IsEnemy`, `Health` and `PoisonStatus`. But the loop call only requests the `Health` and `PoisonStatus` effects, which it receives as `health` and `poison`.

The facet instances passed to your callbacks are **type-safe** and appear in the order in which you requested them:

A tuple of `[Health, PoisonStatus]` results in a tuple `[health, poison]` where `health` is statically-typed as `Health` and `poison` is statically-typed as `PoisonStatus`. (Pretty cool right?)

<Warning>

The tuple of types you request doesn't have to be the same facets used in the query's predicate. However, it is a good idea to keep it to a _subset_ of the facets used in the query's predicate, to ensure the entities you loop over actually have the facets you request.

</Warning>

### Query Events

The [useQuery](/api/core/functions/usequery) hook has a second argument where you can supply event callbacks:

```tsx
const query = useQuery(e => e.has(Invisible), {
    added: e => ... , // this entity just started matching the query
    removed: e => ... , // this entity no longer matches the query
})
```
