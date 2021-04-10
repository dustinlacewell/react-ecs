import { useState } from 'react';

import { ECS } from '../components/ECS';

export function useECS() {
  const [state] = useState(() => {
    return new ECS();
  });

  return state;
}
