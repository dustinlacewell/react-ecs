---
slug: hello-world
title: Hello, world.
author: Dustin Lacewell
author_title: React-ECS Team
author_url: https://github.com/dustinlacewell
author_image_url: https://avatars.githubusercontent.com/u/53952?v=4
tags: [release]
---

# Hello, you beautiful world, you

I am happy to release the first public alpha of React ECS, version `0.0.3`.

React ECS allows you to use the ECS (or [entity component system](/docs/#whats-that)) pattern in a natural way with [React](https://reactjs.org/).

```tsx
const BoidSim = () => {
    const ECS = useECS();
    useAnimationFrame(ECS.update);
    return (
        <ECS.Provider>
            <AlignmentSystem multiplier={1.2} />
            <CohesionSystem />
            <SeparationSystem />
            <NeighborhoodSystem range={100} />

            {() => _.times(10, key =>
                <Entity key={key}>
                    <Neighbor />
                    <DOMView>
                        <img src="/boid.png" />
                    </DOMView>
                </Entity>
            )}
        </ECS.Provider>
}
```

## Conception

React ECS was created because a little more than a month ago, I had this idea for a 3D, neural-network version of a 2D genetic algorithm creature evolver I had built when I was a kid.

I knew I wanted to build it for the web so that it could be easily shared and my first intuition was to use Unity. However, an acquaintance who was interested in collaborating didn't know it.

I found [ThreeJS](https://threejs.org) and [BabylonJS](https://www.babylonjs.com/) pretty quickly and built small prototypes with each. But what I didn't like was trying to mix the imperative code I was writing to interact with their APIs, and the declarative React code I was writing for the web bits around it. I basically always reach for React these days, even for small experiments. Maybe I could make the 3D bits declarative too?

When I searched for "react threejs" I instantly found [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) which is a mind-blowingly excellent library. Essentially, it just has React components that correspond to all the ThreeJS bits, and there you go. Declarative ThreeJS scenes using React.

For BabylonJS a similar library exists, [react-babylonjs](https://github.com/brianzinn/react-babylonjs). So cool. I ultimately went with `react-three/fiber`.

### Picking an ECS

When it came to the behavior of the simulation my thoughts drifted to ECS, as it's now a dominating pattern in both Unity and Unreal. As I looked through the ECS / Typescript landscape I found **many** excellent projects; [escy](https://github.com/ecsyjs/ecsy), [bitecs](https://github.com/NateTheGreatt/bitecs), [nopun](https://github.com/grebaldi/nopun-ecs) and more.

[tick-knock](https://github.com/mayakwd/tick-knock) is what React ECS uses under the hood. Like its project description says:

> Small and powerful, type-safe and easy-to-use Entity-Component-System (ECS) library written in TypeScript

It's the type-safe bit that really sold me. In particular, it allowed a rich API for React ECS' query interface:

```tsx
// create query that tracks entities with Enemy, Health and PoisonStatus facets
const query = useQuery((entity) => entity.hasAll(Enemy, Health, PoisonStatus));
```

OK, that's not very impressive. But when it comes time to use the query, the type-safety really shines:

```tsx
const query = useQuery((entity) => entity.hasAll(Enemy, Health, PoisonStatus));

query.loop([PoisonStatus, Health], (entity, [poison, health]) => {
    // ...
});
```

`Query.loop` allows you to pass a tuple (not array) of distinct facet types in the first arg, which determines the types in the tuple (not array) your callback receives.

I stress "not array", because your editor will unambiguously know that `poison` is of type `PoisonStatus` and `health` of type `Health`. This was _no small feat_, and this kind of API is only made possible by TypeScript's incredible [mapped types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) feature.

React ECS may move onto its own ECS implementation one day (or fork tick-knock), but for now it works quite well.

## Technical Articles

There are some pretty challening puzzles that needed solving in order to get the React ECS API we have today.

I will be publishing some articles on some of the more interesting ones in the future.

## Packages

We actually have multiple packages:

<table>
<tr>
<td>

[@react-ecs/core](/docs/core)

</td>
<td>

Our primary package, containing all the hooks and components needed to use ECS with React.

</td>
</tr>
<tr>
<td>

[@react-ecs/three](/docs/three)

</td>
<td>

Our [View Integration](/docs/core/entity_views) for [ThreeJS](https://threejs.org/)

</td>
</tr>
<tr>
<td>

[@react-ecs/boids](https://github.com/dustinlacewell/react-ecs/tree/master/libs/boids/)

</td>
<td>

Ready to go bits for a [boids simulation](https://en.wikipedia.org/wiki/Boids)

</td>
</tr>
</table>

The plan is to continue grow this ecosystem with additional libraries. We've already had some experimental success with [BabylonJS](https://www.babylonjs.com/) and [CannonJS](https://github.com/pmndrs/cannon-es) integrations.

## Documentation

Documentation for the current version is ready to go! We're eager to hear your constructive feedback.

A User Guide and other tutorial content is currently planned, so make sure to look out for another announcement around that.

## Alpha Issues

While best efforts were made, there's just _no way_ this release doesn't contain a non-zero amount of the following:

-   ECS bugs
-   React bugs
-   Design and API issues
-   Performance issues

Please file any problems, questions or suggestions you have with our [issue tracker](https://github.com/dustinlacewell/react-ecs/issues).

## Community

React ECS has a channel over on the [Web ECS Discord](https://discord.gg/RJqjqAnmJ8).

Feel free to join and discuss the future of the project or get help using it.

## Contribute

Speaking of the future of the project; if you're interested, here's a number of areas to contribute to:

-   Cool examples to feature on the site
-   Additional documentation, guides and tutorial material
-   Implementing additional integrations (babylon, cannon, etc.)
-   Improving the monorepo and release automation
-   Establishing a test suite
-   Profiling and optimizing performance
-   Ensuring good interoperability with the nuances of React's own behavior
-   Help develop a story around serialization given React ECS' statically-typed focus

Stuff for those at every level :D

## Conclusion

Here's an "understatement":

> This was harder than I thought

It makes me swirl thinking back at the many abysses I've traversed getting here. Dazed. Confused. In a hopeless abandon of confounding bewilderment. The constraints of [Fast Refresh](https://reactnative.dev/docs/fast-refresh) subverting my every expectation. The complexity of JS monorepo tooling slowly consuming me.. The limitations of NPM's republishing rules staying my struggling hands...

Despite it all, perservation prevails!

All for you dear reader. So that we could join hands, and merrily go forth making sick web visualizations and stuff. :P

Join me on [Discord](https://discord.gg/RJqjqAnmJ8).

import thisSource from '!!raw-loader!../src/scenes/DOMParticles';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { DOMParticles } from '../src/scenes/DOMParticles';
import { Example } from '../src/components/Example';
import { Leva } from 'leva';

<Example hideControls >
    <div style={{
        minHeight: "400px", display: 'flex', alignItems: "stretch",
        flexDirection: "column"
    }}>
        <DOMParticles />
    </div>
</Example>
