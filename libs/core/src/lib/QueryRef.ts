import { MutableRefObject } from "react";
import {
    Entity,
    QueryPredicate,
} from "tick-knock";

import { Query } from "./Query";
import {
    Constructor,
    Constructors,
    Instances,
} from "./utils";

export class QueryRef {
    ref: MutableRefObject<Query>;

    constructor(ref: MutableRefObject<Query>) {
        this.ref = ref;
    }

    get current() {
        return this.ref.current;
    }

    loop<T extends Constructor[], K extends Constructors<T>>(
        types: K,
        cb: (entity: Entity, instances: Instances<T, K>) => void,
    ) {
        if (this.current) {
            return this.current.loop(types, cb);
        }
    }

    get entities() {
        if (this.current) {
            return this.current.entities;
        }
    }

    get first() {
        if (this.current) {
            return this.current.first;
        }
    }

    get last() {
        if (this.current) {
            return this.current.last;
        }
    }

    get length() {
        if (this.current) {
            return this.current.length;
        }
    }

    countBy(predicate: QueryPredicate) {
        if (this.current) {
            return this.current.countBy(predicate)
        }
        return 0;
    }

    filter(predicate: QueryPredicate): Entity[] {
        if (this.current) {
            return this.current.filter(predicate)
        }
        return [];
    }

    has(entity: Entity) {
        if (this.current) {
            return this.current.has(entity)
        }
        return false;
    }

    get isEmpty() {
        if (this.current) {
            return this.current.isEmpty;
        }
        return true;
    }

    clear() {
        if (this.current) {
            return this.current.clear()
        }
    }

}
