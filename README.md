# React ECS

**React ECS** is a framework for declaratively expressing the parts of an "entity component system".

## Why?

Build your simulations and visualizations declaratively with re-usable components that react to state and can tap into the React ecosystem.

### Does it have limitations?

`react-ecs` is a fully-fledged ECS and is renderer agnostic. (Use the DOM, react-three-fiber, babylonjs, etc)

## What does it look like?

<table>
  <tr>
    <td>Let's make a simple simulation that updates a ThreeJS cube based on a Spinning facet. (<a href="https://codesandbox.io/s/react-ecs-nextjs-test-hp9do">live demo</a>).</td>
    <td>
      <a href="https://codesandbox.io/s/react-ecs-nextjs-test-hp9do">
        <img src="https://i.imgur.com/hUgweKX.gif" /></td>
      </a>
  </tr>
</table>

```tsx
// define a facet that get attached to entities
class Spinning extends Facet<Spinning> {
    rotation = new Vector3(0, 0, 0);
}

// define a system which processes entity facets
const SpinningSystem = () => {
    // a query makes it easy to find entities the right facets
    const query = useQuery(e => e.hasAll(ThreeView, Spinning));

    // systems are basically just update callbacks with priorities
    return useSystem((dt: number) => {
        // iterate the entities with the ThreeView and Spinning facets
        query.loop([ThreeView, Spinning], (e, [view, spin]) => {
            // receive typed facets for each matching entity
            const transform = view.object3d; // <ThreeView> Object3D
            const rotation = spin.rotation // <Spinning> facet
                .clone()
                .multiplyScalar(dt);
            // calculate new state
            const newRotation = transform.rotation
                .toVector3()
                .add(rotation);
            // mutate facets, state is automatically handled
            transform.rotation.setFromVector3(newRotation);
        });
    });
};

export const SpinningCubeStory: FC = () => {
    // declare the ECS instance
    const ECS = useECS();

    // drive the ECS with react-three-fiber's frame hook
    useFrame((_, dt) => ECS.update(dt));

    return (
          {/* use ECS as context provider */}
          <ECS.Provider>
              {/* add systems to the simulation */}
              <SpinningSystem />

              {/* entities are their own context provider */}
              <Entity>

                  {/* add facets to entities */}
                  <Spinning rotation={new Vector3(1, 1, 1)} />

                  {/* use integrations like react-three-fiber */}
                  <ThreeView>
                      <Box />
                  </ThreeView>

              </Entity>
          </ECS.Provider>
    );
};
```

# What's an ECS?

An ECS, or "Entity Component System" is a design pattern popular in game development. It eschews rich objects for simple Entities that compose data-only Components, or "Facets" as `react-ecs` calls them (to avoid confusion with React Components).

Logic is then handled by small update functions called Systems that operate upon the Facets related to it:


<center>
  <img src="https://i.imgur.com/nTfGWyF.png" />
</center>


# Docs Index

<table>
  <tr>
    <td valign="top">
      <ul>
        <li><a href="#types">Types</a></li>
        <ul>
            <li><a href="#ecs">ECS</a></li>
            <li><a href="#engine">Engine</a></li>
            <li><a href="#system">System</a></li>
            <li><a href="#entity">Entity</a></li>
            <li><a href="#facet">Facet</a></li>
            <li><a href="#query">Query</a></li>
        </ul>
      </ul>
    </td>
    <td valign="top">
      <ul>
        <li><a href="#hooks">Hooks</a></li>
        <ul>
            <li><a href="#useecs">useECS</a></li>
            <li><a href="#usenegine">useEngine</a></li>
            <li><a href="#usesystem">useSystem</a></li>
            <li><a href="#useentity">useEntity</a></li>
            <li><a href="#usefacet">useFacet</a></li>
            <li><a href="#usequery">useQuery</a></li>
        </ul>
      </ul>
    </td>
    <td valign="top">
      <ul>
        <li><a href="#hooks">Components</a></li>
        <ul>
            <li><a href="#_ecs">&lt;ECS.Provider /&gt;</a></li>
            <li><a href="#_entity">&lt;Entity /&gt;</a></li>
            <li><a href="#_emitter">&lt;Emitter /&gt;</a></li>
          </ul>
        </ul>
      </ul>
    </td>
  </tr>
</table>


# Types

## ECS

The `ECS` instance is the central context for a given simulation. It holds the <a href="#engine">Engine</a> and registered system <a href="#callback">Callbacks</a>.

You can get the current instance from the `useECS` hook:

```ts
const ECS = useECS();
```

### Updating the ECS

Update the ECS by calling it's `update(dt)` method with a time-delta:

```ts
useAnimationFrame(dt => ECS.update(dt));
```

### Using the Context Provider

Use the context provider via the ECS's `Provider` property:

```tsx
<ECS.Provider>
    <PhysicsSystem />
    <Entity>
        <Position />
        <Velocity />
    </Entity>
</ECS.Provider>
```

## Engine

The `Engine` implements the entity component system. It is currently based on <a href="https://github.com/mayakwd/tick-knock">Tick-knock</a> by <a href="https://github.com/mayakwd/">mayakwd</a>.

Documentation can be found here: https://github.com/mayakwd/tick-knock#engine

> `Note:` You normally shouldn't need to interact with `Engine` directly.


## System

```ts
type System = (dt: number) => void
```

A `System` is a callback function that you can register with the ECS. It will be called each time the ECS itself is updated.

Systems can be registered with the <a href="#usesystem">useSystem</a> hook.

Systems can utilize the <a href="#usequery">useQuery</a> hook to create a <a href="#query">Query</a> to find entities to process.

> `Note:` See <a href="#usesystem">useSystem</a> for more information.


## Entity

Entities represent the constitutents of your simulation. They exist as a collection of data <a href="#facet">Facets</a> which are processed by <a href="#system">Systems</a>. They are typically created by utilizing the <a href="#_entity">&lt;Entity /&gt;</a> component.

Currently, `Entity` is provided by <a href="https://github.com/mayakwd/tick-knock">Tick-knock</a> by <a href="https://github.com/mayakwd/">mayakwd</a>.

Documentation can be found here: https://github.com/mayakwd/tick-knock#entity

> `Note:` See <a href="#_entity">&lt;Entity /&gt;</a> for more information.


## Facet

> Requires <a href="#">&lt;Entity /&gt;</a>

Facets are small, data-only objects that represent aspects or "facets" of your simulation's entities.

`Facet<T>` is the base class for all facets. Any class properties become the component's props:

```ts
class Motion extends Facet<Motion> {
    velocity = new Vector3(0, 0, 0);
    acceleration = new Vector3(0, 0, 0);
}
```

Placing the Facet within an <a href="#_entity">&lt;Entity /&gt;</a> associates it with the <a href="#entity">Entity</a> instance.

```tsx
<Entity>
  <Motion acceleration={new Vector3(0, -9.8, 0)}>
</Entity>
```

### Note:

> You must pass the new type to `Facet<T>` as a generic parameter: `Motion extends Facet<Motion>`

## Query

`Query` is helpful for easily tracking <a href="#entity">Entities</a> which have a specific set of <a href="#facet">Facets</a>.

The <a href="#usequery">useQuery</a> is an easy way to create and register queries.

### Query.loop

```ts
loop(Class<Facet>[], (entity: Entity, facets: Facet[]) => void)
```

Call `loop()` with an array of <a href="#facet">Facet</a> `types` and a `callback`. The callback should recieve an <a href="#entity">Entity</a> and its instances of the requested facets.

The callback will be called for every Entity that has the right Facets.


# Hooks

The following sections will explain the central pieces to `react-ecs`:


## useECS

```ts
useECS(systems: Callback[] = [], entities: Entity[] = []): ECS
```

To use `react-ecs` start with the `useECS` hook to create an <a href="#ecs">ECS</a> instance.

The hook can receive arrays of systems and entities that you wish to add imperatively.

> See: <a href="#ecs">ECS</a> for more information.


## useEngine

> Requires <a href="#_provder">&lt;ECS.Provider&gt;</a>

```ts
useEngine(): Engine
```

The `useEngine` hook returns the underlying ECS `Engine` instance:


## useSystem

> Requires <a href="#_provider">&lt;ECS.Provider&gt;</a>

```ts
useSystem(callback: Callback, priority = 0): null
```

Add a system `Callback` function to the `Engine` of the nearest <a href="#ecs">ECS.Provider</a>.


## useEntity

> Requires <a href="#_provider">&lt;ECS.Provider&gt;</a>

```ts
useEntity(): Entity
```

Returns the `Entity` instance of the nearest `<Entity>` context:


## useFacet

> Requires <a href="#ecs">&lt;Entity&gt;</a>

```ts
useFacet(type: Class<T extends Facet>): T | undefined
```

Returns a Facet instance for the `Entity` instance of the nearest `<Entity>`.


## useQuery

> Requires <a href="#_provider">&lt;ECS.Provider&gt;</a>

```ts
useQuery(predicate: (Entity) => boolean, options?: QueryOptions): Query
```

Returns a new `Query` and adds it to the `Engine` of the nearest <a href="#_provider">ECS.Provider</a>.

The `predicate` should return whether the passed entity is a result of the query.

The `options` have the following properties:

```ts
{
  added?: (Entity) => void, // called when an entity satisfies the query
  removed?: (Entity) => void, // called when an entity ceases satisfying the query
}
```

> See <a href="#query">Query</a> for more information.


# Components

## <ECS.Provider /\>

The <a href="#ecs">ECS</a> instance returned by the <a href="#useecs">useECS</a> hook has a `Provider` property which can be used as a <a href="https://reactjs.org/docs/context.html">React Context</a> provider.

```jsx
<ECS.Provider>
    // your systems and entities go here
</ECS.Provider>
```

The `ECS.Provider` component is required for all other `react-ecs` <a href="#components">components</a>.

## <Entity /\>

> Requires <a href="_provider">&lt;ECS.Provider /&gt;</a>

The `<Entity />` component declares a new <a href="#entity">Entity</a> within your simulation.

Within it you may place <a href="#facet">Facet</a> components to associate them with the entity.

```jsx
<ECS.Provider>
    <Entity>
      <Position />
      <Velocity />
    </Entity>
</ECS.Provider>
```
