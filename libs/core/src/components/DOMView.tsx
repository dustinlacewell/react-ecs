import React, {
    Children,
    cloneElement,
    Component,
    ContextType,
    createRef,
    ReactElement,
    RefObject
} from 'react';

import { EntityContext } from '../hooks';

export interface DOMViewProps {
    children: ReactElement;
}

export interface DOMViewState {
    styles: {
        top: number;
        left: number;
        width: number;
        height: number;
        position: 'absolute' | 'relative';
    }
}

/**
 * Documentation for DOMView
 * @noInheritDoc
 */
export class DOMView extends Component<DOMViewProps/*, DOMViewState*/> {
    static contextType = EntityContext;
    context!: ContextType<typeof EntityContext>;
    public readonly ref: RefObject<HTMLElement>;

    constructor(props: DOMViewProps) {
        super(props);
        this.ref = createRef<HTMLElement>();
    }

    get element() {
        return this.ref.current!;
    }

    componentDidMount() {
        const entity = this.context!;
        entity.add(this as NonNullable<DOMView>);
    }

    render() {
        if (Children.count(this.props.children) !== 1) {
            throw new Error('<DOMView /> must have a single child.')
        }

        return <>
            {cloneElement(this.props.children, {
                ref: this.ref,
            })}
        </>
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(DOMView as any).__componentClassId__ = -1;
