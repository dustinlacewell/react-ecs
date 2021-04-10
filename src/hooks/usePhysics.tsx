import { World } from 'cannon-es';
import {
  createContext,
  useContext,
} from 'react';

export const PhysicsContext = createContext<World | null>(null);

export function usePhysics() {
  return useContext(PhysicsContext)!;
}
