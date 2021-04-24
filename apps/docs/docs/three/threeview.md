---
title: ThreeView
sidebar_label: ThreeView
sidebar_position: 1
---

import { Warning } from '../../src/components/Warning'

For API documentation [check here](/api/three/classes/threeview).

[&lt;ThreeView&gt;](/api/three/classes/threeview) is a [Entity View](/docs/core/entity_views) that lets your entities partake in [ThreeJS](https://threejs.org/) scenes.

In addition to familiarity with ThreeJS, this documentation also assume some familiarity with:

-   [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)
-   [@react-three/drei](https://github.com/pmndrs/drei)

If you don't know them already, check them out. Incredible libraries.

## ThreeView as a Facet

[&lt;ThreeView&gt;](/api/three/classes/threeview) is used like a normal facet:

```tsx
<Canvas>
    <ECS.Provider>
        <Entity>
            <Health />
            <ThreeView>
                {/* your @react-three fiber/drei components */}
            </ThreeView>
        </Entity>
    </ECS.Provider>
</Canvas>
```

<Warning label="Heads up!">

Notice that we've wrapped a [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) [&lt;Scene&gt;](https://docs.pmnd.rs/react-three-fiber/API/canvas) around everything.

It doesn't matter whether [&lt;Scene&gt;](https://docs.pmnd.rs/react-three-fiber/API/canvas) or [ECS.Provider](http://logos.ldlework.com:8000/api/core/classes/ecs#provider) comes first though.

</Warning>

It can also be queried like a normal facet:

```tsx
const query = useQuery((e) => e.has(ThreeView));
```

## Child Content

[&lt;ThreeView&gt;](/api/three/classes/threeview) should have a single child that is either a [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) or [@react-three/drei](https://github.com/pmndrs/drei) compatible component.

```tsx
<Entity>
    <ThreeView>
        <Torus scale={5}>
            <meshBasicMaterial color={red}>
        </Torus>
    </ThreeView>
</Entity>
```

### Accessing the view child

Simply use the [ThreeView.object3d](/api/three/classes/threeview#object3d) property:

```tsx
const CoolSystem = () => {
    const query = useQuery((e) => e.has(ThreeView));

    return useSystem((dt) => {
        query.loop([ThreeView], (e, [view]) => {
            const mesh = view.object3d as Mesh;
            // ...
        });
    });
};
```

See [Entity Views](/docs/core/entity_views) for more information.
