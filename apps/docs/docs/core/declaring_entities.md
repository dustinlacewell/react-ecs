---
title: Declaring Entities
sidebar_label: Declaring Entities
sidebar_position: 2
---

import { Warning } from '../../src/components/Warning'

Use the [&lt;Entity&gt;](/api/core/classes/entity) component to declare your entities:

```tsx
<ECS.Provider>
    <Entity>
        <Transform />
        <Health />
    </Entity>
</ECS.Provider>
```

<Warning label="Note">

Ensure that entities are declared within the context of an [ECS.Provider](/docs/core/creating_an_ecs#ecsprovider).

</Warning>

## Entity References

You can pass a [React Ref](https://reactjs.org/docs/refs-and-the-dom.html) to [&lt;Entity&gt;](/api/core/classes/entity) to get a reference:

```tsx
const CoolSim = () => {
    const ref = useRef();
    return <Entity ref={ref}>{/* ... */}</Entity>;
};
```

If you have imperatively created an Entity you can inject it into your [&lt;Entity&gt;](/api/core/classes/entity) declaration:

```tsx
const CoolSim = () => {
    const entity = new Entity();
    // ...
    return <Entity entity={entity}>{/* ... */}</Entity>;
};
```
