import React, {
  Component,
  ContextType,
  ReactNode,
} from 'react';
import { Entity as _Entity } from 'tick-knock';

import { EntityContext } from '../hooks/useEntity';
import { ECSContext } from './ECS';

export type EntityProps = {
  entity?: _Entity;
};

export class Entity extends Component {
  static contextType = ECSContext;
  context!: ContextType<typeof ECSContext>;

  public entity: _Entity;

  constructor(props: { children: ReactNode }) {
    super(props);
    this.entity = new _Entity();
  }

  componentDidMount() {
    this.context.engine.addEntity(this.entity);
  }

  componentWillUnmount() {
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
