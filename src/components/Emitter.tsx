import React, {
  cloneElement,
  createRef,
  FC,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import { Entity as _Entity } from 'tick-knock';

import { useEngine } from '../hooks';
import { useStatefulRef } from '../hooks/useStatefulRef';
import { useTimer } from '../hooks/useTimer';
import { Entity } from './Entity';

export type EmitterProps = {
  emissionDelay?: number;
  children: ReactElement | (() => ReactElement);
};

const emitterDefaults = {
  emissionDelay: 0.1,
};

type ManagedElement<T> = {
  element: ReactElement;
  ref: MutableRefObject<T>;
};

export const Emitter: FC<EmitterProps> = props => {
  const engine = useEngine();
  props = { ...emitterDefaults, ...props };
  const { emissionDelay } = props;

  const id = useRef(0);
  const template = props.children;

  const [particles, setParticles] = useStatefulRef(
    [] as ManagedElement<Entity>[],
  );

  const clone = () => {
    const ref = createRef<Entity>();
    const key = id.current++;
    let element: ReactElement;

    if (template instanceof Function) {
      element = Object.assign({}, template(), { ref, key });
    } else {
      element = cloneElement(
        template as ReactElement,
        Object.assign({}, {}, { ref, key }),
      );
    }
    return { element, ref } as ManagedElement<Entity>;
  };

  const remove = (index: number) => {
    if (index > -1) {
      if (particles.current.length == 1) {
        setParticles([]);
      } else {
        const head = particles.current.slice(0, index);
        const tail = particles.current.slice(index + 1);
        setParticles(head.concat(tail));
      }
    }
  };

  useTimer(emissionDelay!, () => {
    setParticles([...particles.current, clone()]);
  });

  const onRemoved = (entity: _Entity) => {
    const index = particles.current.findIndex(
      p => p.ref.current.entity.id === entity.id,
    );
    remove(index);
  };

  useEffect(() => {
    engine.onEntityRemoved.connect(onRemoved);
    return () => {
      engine.onEntityRemoved.disconnect(onRemoved);
    };
  }, []);

  return <>{particles.current.map(p => p.element)}</>;
};
