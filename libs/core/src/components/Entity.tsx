import React, {
    Component,
    ContextType,
    ReactNode,
} from "react";
import { Entity as _Entity } from "tick-knock";

import { EntityContext } from "../hooks/useEntity";
import { ECSContext } from "./ECS";

export type EntityProps = {
    entity?: _Entity;
    children: ReactNode;
};

export class Entity extends Component<EntityProps> {
    static contextType = ECSContext;
    context!: ContextType<typeof ECSContext>;

    public entity: _Entity;

    constructor(props: EntityProps) {
        super(props);
        this.entity = new _Entity();
    }

    componentDidMount() {
        this.context.engine.addEntity(this.entity);
    }

    componentWillUnmount() {
        this.entity.clear()
        this.entity.invalidate();
        this.context.engine.removeEntity(this.entity);
    }

    render() {
        return (
            <EntityContext.Provider value={this.entity}>
                {this.props.children}
            </EntityContext.Provider>
        );
    }
}
