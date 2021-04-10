import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const useTimer = (interval: number, callback: () => void) => {
  const time = useRef(0);
  useFrame((_, dt) => {
    time.current += dt;
    if (time.current > interval) {
      time.current = 0;
      callback();
    }
  });
};
