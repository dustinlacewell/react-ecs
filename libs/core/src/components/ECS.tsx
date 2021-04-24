import React, {
    createContext,
    ProviderProps,
} from "react";
import {
    Engine,
    Entity,
} from "tick-knock";

import { System } from "../lib/System";
import { SystemsManager } from "../lib/SystemsManager";

export const ECSContext = createContext<ECS>((null as unknown) as ECS);

export class ECS {
    engine = new Engine();
    systems = new SystemsManager();

    constructor(systems: System[] = [], entities: Entity[] = []) {
        this.update = this.update.bind(this);
        this.Provider = this.Provider.bind(this);
        systems.forEach((s) => this.systems.add(s));
        entities.forEach((e) => this.engine.addEntity(e));
    }

    update(dt: number) {
        this.systems.update(dt);
    }

    Provider(props: Omit<ProviderProps<ECS>, 'value'>) {
        return (
            <ECSContext.Provider value={this}>{props.children}</ECSContext.Provider>
        );
    }
}
