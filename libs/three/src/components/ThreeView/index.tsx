import { EntityContext } from '@react-ecs/core';
import React, {
    Children,
    Component,
    ContextType,
    createRef,
    ReactElement,
    RefObject
} from 'react';
import { Object3D } from 'three';

export interface ThreeViewProps {
    children: ReactElement;
}

export class ThreeView extends Component<ThreeViewProps> {
    static contextType = EntityContext;
    context!: ContextType<typeof EntityContext>;
    public readonly ref: RefObject<Object3D>;

    constructor(props: ThreeViewProps) {
        super(props);
        this.ref = createRef<Object3D>();
    }

    get object3d() {
        return this.ref.current!;
    }

    componentDidMount() {
        const entity = this.context!;
        entity.add(this as NonNullable<ThreeView>);
    }

    render() {
        if (Children.count(this.props.children) !== 1) {
            throw new Error('<ThreeView /> must have a single child.');
        }

        return <>{React.cloneElement(this.props.children, { ref: this.ref })}</>;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(ThreeView as any).__componentClassId__ = 100
