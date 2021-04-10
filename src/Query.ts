import {
  Entity,
  Query as _Query,
} from 'tick-knock';

import { Facet } from './components/Facet';
import {
  Constructor,
  Constructors,
} from './utils';

type Instances<T extends Constructor[], K extends Constructors<T>> = {
  [I in keyof K]: K[I] extends Constructor<infer U>
    ? Required<Omit<U, keyof Facet<T>>>
    : never;
};

export class Query extends _Query {
  loop<T extends Constructor[], K extends Constructors<T>>(
    types: K,
    cb: (entity: Entity, instances: Instances<T, K>) => void,
  ) {
    for (const entity of this.entities) {
      const components = [];
      for (const t of types) {
        const component = entity.get(t)!;
        components.push(component);
      }
      cb(entity as Entity, (components as unknown) as Instances<T, K>);
    }
  }
}
