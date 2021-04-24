---
title: Entity Views
sidebar_label: Entity Views
sidebar_position: 4
---

import { Warning } from '../../src/components/Warning'

At its core, `react-ecs` is just a way for you to declare the parts of an ECS simulation in the style of React. How you present that simulation is entirely up to you.

In `@react-ecs/core` we offer a simple DOM oriented view called [DOMView](/api/core/classes/domview).

## DOMView

[DOMView](/api/core/classes/domview) is a simple component that you can use as a [Facet](/api/core/classes/facet) on your [Entities](/api/core/classes/entity). It's children become that representation of that entity within the DOM:

```tsx
<Entity>
    <DOMView>
        <img
            src="https://i.imgur.com/kFjaH5l.png"
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: 16,
                height: 16,
            }}
        />
    </DOMView>
</Entity>
```

### Using in Queries

You can treat [DOMView](/api/core/classes/domview) like any other [Facet](/api/core/classes/facet). That means you can use it within [Queries](/api/core/classes/query):

```tsx
const DOMViewSystem = () => {
    const query = useQuery((e) => e.hasAll(DOMView, Position));

    return useSystem((dt) => {
        query.loop([DOMView, Position], (e, [view, pos]) => {
            // sync DOM element's style with entity's Position
            view.element.style.left = `${pos.location.x}px`;
            view.element.style.top = `${pos.location.y}px`;
        });
    });
};
```

In this example, we create a [System](/api/core/types/system) to the entity's DOM position with it's `Position` facet by manipulating the styles of the [DOMView.element](/api/core/classes/domview#element).

<Warning label="Tip">

This technique can be used to integrate `@react-ecs/core` with basically any alternative renderer for React. Check out [@react-ecs/three](/docs/three) for an example of this technique applied to [ThreeJS](https://threejs.org/)

</Warning>
