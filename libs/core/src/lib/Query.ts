import {
    Entity,
    Query as _Query,
} from "tick-knock";

import {
    Constructor,
    Constructors,
    Instances,
} from "./utils";

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
