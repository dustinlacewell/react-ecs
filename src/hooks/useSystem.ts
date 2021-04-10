import {
  useContext,
  useEffect,
} from 'react';

import { ECSContext } from '../components/ECS';
import { System } from '../System';

export const useSystem = (callback: System, priority = 0) => {
  const { systems } = useContext(ECSContext);

  useEffect(() => {
    systems.add(callback, priority);
    return () => {
      systems.remove(callback);
    };
  }, [callback, priority]);
  return null;
};
