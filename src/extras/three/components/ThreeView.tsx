import React, {
  Children,
  Component,
  ContextType,
  createRef,
  ReactElement,
  RefObject,
} from 'react';
import { Object3D } from 'three';

import { EntityContext } from '../../../hooks/useEntity';

interface ViewProps {
  children: ReactElement;
}

export class View extends Component<ViewProps> {
  static contextType = EntityContext;
  context!: ContextType<typeof EntityContext>;
  public readonly ref: RefObject<Object3D>;

  constructor(props: ViewProps) {
    super(props);
    this.ref = createRef<Object3D>();
  }

  get object3d() {
    return this.ref.current!;
  }

  componentDidMount() {
    const entity = this.context!;
    entity.add(this as NonNullable<View>);
  }

  render() {
    if (Children.count(this.props.children) != 1) {
      throw new Error('<View /> must have a single child.');
    }

    return <>{React.cloneElement(this.props.children, { ref: this.ref })}</>;
  }
}
