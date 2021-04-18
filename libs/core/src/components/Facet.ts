import {
    configure,
    makeObservable,
    observable,
} from "mobx";
import {
    Component,
    ContextType,
} from "react";

import { EntityContext } from "../hooks/useEntity";
import { NonFunctionProperties } from "../lib/utils";

configure({
    enforceActions: 'never',
});

const filteredProps = ['props', 'context', 'refs', 'updater', 'meta'];

// eslint-disable-next-line @typescript-eslint/ban-types
export class Facet<T extends {}> extends Component<
  NonFunctionProperties<Omit<T, 'meta'>>
// NonFunctionProperties<Omit<T, ''>>
> {
  static contextType = EntityContext;
  context!: ContextType<typeof EntityContext>;

  createFake() {
      const ctor = Object.getPrototypeOf(this).constructor;
      return new ctor();
  }

  getAnnotations(fake: unknown) {
      const entries = new Map(
          Object.getOwnPropertyNames(fake)
              .filter((k) => !filteredProps.includes(k) && !k.endsWith("Ref"))
              .map((k) => [k, observable]),
      ).entries();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return Object.fromEntries(entries) as any;
  }

  asComponent() {
      return this as NonNullable<Facet<T>>;
  }

  componentDidMount() {
      if (this.context) {
          Object.assign(this, this.props);
          const fake = this.createFake();
          const annotations = this.getAnnotations(fake);
          makeObservable(this, annotations, {
              autoBind: true,
          });
          this.context.add(this as any);
      } else {
          console.error(`Data Component without Entity Context!`);
      }
  }

  render() {
      return null;
  }
}
