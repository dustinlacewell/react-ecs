---
title: Defining Facets
sidebar_label: Defining Facets
sidebar_position: 1
---

[Facets](/api/core/classes/facet) are simple data classes. Here are a couple examples:

```tsx
class Transform extends Facet<Position> {
    position? = new Vector2(0, 0);
    rotation? = 0;
}

class Health extends Facet<Position> {
    current? = 100;
    max? = 100;
}

class Invincible extends Facet<Position> {}
```

## Facet Classes

Every facet must extend [Facet&lt;T&gt;](/api/core/classes/facet), with itself as the `T` type parameter.

Facet attributes are declared as [class fields](https://www.typescriptlang.org/docs/handbook/2/classes.html#fields).

You can either provide a default:

```ts
    position? = new Vector2(0, 0)
```

...in which case you should mark the field as optional. This is so the corresponding [Facet Prop](#facetprops) is also optional.

Or you can provide a type:

```ts
position: Vector2;
```

...in which case you should _not_ mark the field as options. This is to ensure the corresponding [Facet Prop](#facetprops) is also required.

### Facet Tags

Facets may have no fields, in which case they may be used as marker tags:

```ts
class IsEnemy extends Facet<IsEnemy> {}
```

## Facet Components

Facets are automatically valid React Components. Use them within an [Entity Declaration](/docs/core/declaring_entities) to associate them with an [Entity](/api/core/classes/entity):

```tsx
<Entity>
    <Transform />
    <Velocity />
    <Health max={500} />
</Entity>
```
