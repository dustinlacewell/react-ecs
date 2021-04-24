---
title: Creating an ECS
sidebar_label: Creating an ECS
sidebar_position: 1
---

## useECS Hook

Every time you use react-ecs, you need create an [ECS](/api/core/classes/ecs) instance. That's easy with the [useECS](/api/core/functions/useECS) hook:

```tsx
const CoolSim = () => {
    const ECS = useECS();
    // ...
};
```

## ECS.Provider

[ECS](/api/core/classes/ecs) is used by everything.

To make it available, utilize the [React Context](https://reactjs.org/docs/context.html) tucked away in the [ECS.Provider](/api/core/classes/ecs#provider) attribute:

```tsx
const CoolSim = () => {
    const ECS = useECS();
    return <ECS.Provider>{/* ... */}</ECS.Provider>;
};
```

## Driving the ECS

The [System](/api/core/types/system) functions you use are called every time that [ECS.update](/api/core/classes/ecs#update) is called. An easy way to do that is with the [useAnimationFrame](/api/core/functions/useanimationframe) hook:

```tsx
const CoolSim = () => {
    const ECS = useECS();
    useAnimationFrame((dt) => ECS.update(dt));
    return <ECS.Provider>{/* ... */}</ECS.Provider>;
};
```
