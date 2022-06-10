<h1 align="center">
  <br>
  <a href="https://react-ecs.ldlework.com"><img src="https://i.imgur.com/Rn6yLZs.gif" alt="React ECS" width="300"></a>
  <br>
  React ECS
  <br>
  <a href="https://react-ecs.ldlework.com">react-ecs.ldlework.com</a>
</h1>

<h4 align="center">A declarative Entity Component System for React.</h4>

<p align="center">
    <a href="https://react-ecs.ldlework.com/docs/">
        <img src="https://img.shields.io/static/v1?label&message=Documentation&color=grey" alt="Documentation Link"/>
    </a>
    <a href="https://react-ecs.ldlework.com/api/core">
        <img src="https://img.shields.io/static/v1?label&message=API&color=grey" alt="API Link"/>
    </a>
    <a href="https://react-ecs.ldlework.com/examples/">
        <img src="https://img.shields.io/static/v1?label&message=Examples&color=grey" alt="Examples Link"/>
    </a>
    <a href="https://react-ecs.ldlework.com/blog/">
        <img src="https://img.shields.io/static/v1?label&message=Blog&color=grey" alt="Blog Link"/>
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@react-ecs/core">
        <img alt="npm" src="https://img.shields.io/npm/v/@react-ecs/core?color=green&label=%40react-ecs%2Fcore">
    </a>
    <a href="https://www.npmjs.com/package/@react-ecs/three">
        <img alt="npm" src="https://img.shields.io/npm/v/@react-ecs/three?color=green&label=%40react-ecs%2Fthree">
    </a>
    <a href="https://www.npmjs.com/package/@react-ecs/boids">
        <img alt="npm" src="https://img.shields.io/npm/v/@react-ecs/boids?color=green&label=%40react-ecs%2Fboids">
    </a>
</p>

<p align="center">
    <a href="https://discord.gg/RJqjqAnmJ8">
        <img src="https://img.shields.io/discord/733027681184251937.svg?style=flat&label=Join%20Community&color=7289DA" alt="Join Community Badge"/>
    </a>
    <a href="https://buymeacoffee.com/idle">
        <img src="https://img.shields.io/static/v1?label=&message=Support%20React%20ECS&logo=buy-me-a-coffee&color=blue" />
    </a>
</p>

An **ECS**, or _Entity Component System_ is a design pattern popular in simulations, visualizations and game-development. It eschews rich objects and complex inheritence hierarchies.

Instead:

-   **Entities**: A simple bag of facets.
-   **Facets**: Simple data-only objects.
-   **Queries**: Track entities which have specific facets.
-   **Systems**: Process the facets of entities matched by queries.

[React ECS](https://react-ecs.ldlework.com/) helps you build your simulations and games using this pattern, in standard React JS fashion (hooks, components, etc)

<br>

# What does it look like?

<table>
  <tr>
    <td>
        Let's make a simple simulation that updates a cube based on a <code>Spinning</code> facet, using React ECS' <a href="https://threejs.org/">ThreeJS</a> integration <a href="https://react-ecs.ldlework.com/docs/three">@react-ecs/three</a>. &nbsp; <sub><a href="https://codesandbox.io/s/react-ecs-demo-tv5xj?from-embed=&file=/src/index.tsx">
        <img src="https://img.shields.io/static/v1?label=&message=Try%20it%20live" /></sub>
    </a>
    </td>
    <td>
      <a href="https://codesandbox.io/s/react-ecs-nextjs-test-hp9do">
        <img src="https://i.imgur.com/hUgweKX.gif" />
      </a>
    </td>
  </tr>
</table>

## First define a Facet

This facet just tracks how much its entity should spin.

```tsx
class Spin extends Facet<Spin> {
    amount? = new Vector3(1, 1, 1);
}
```

## Then define a System

Systems use queries to track the entities they work upon.

This system uses a query to find entities with both the `ThreeView` and `Spin` facets. `ThreeView` is facet provided by [@react-ecs/three](https://react-ecs.ldlework.com/docs/three) to visually display entities in a [ThreeJS](https://threejs.org/) scene.

This system updates the entity's 3D rotation based on the `Spin` facet:

```tsx
const SpinSystem = () => {
    const query = useQuery((e) => e.hasAll(ThreeView, Spin));

    return useSystem((dt) => {
        query.loop([ThreeView, Spin], (e, [view, spin]) => {
            const rot = view.object3d.rotation;
            rot.x += spin.amount.x * dt;
            rot.y += spin.amount.y * dt;
            rot.z += spin.amount.z * dt;
        });
    });
};
```

## Now put it all together

Now we can create a component to tie it all together. For more information see our [documentation](https://react-ecs.ldlework.com/docs/) and [examples](https://react-ecs.ldlework.com/examples/).

```tsx
const CoolSim = () => {
  const ECS = useECS()
  useAnimationFrame(ECS.update)

  return (
    <Canvas>
      <ECS.Provider>
        <SpinSystem />
        <Entity>
          <Spin />
          <ThreeView>
            <Box />
          </ThreeView>
        </Entity>
      </ECS.Provider>
    </Canvas>
  )
}
```

[![Edit React ECS Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-ecs-demo-tv5xj?fontsize=14&hidenavigation=1&theme=dark)
