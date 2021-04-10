import { useState } from 'react';
import {
  EntitySnapshot,
  QueryPredicate,
} from 'tick-knock';

import { Query } from '../Query';
import { useEngine } from './useEngine';

export type SnapshotHandler = (snapshot: EntitySnapshot) => void;
export type UseQueryOptions = {
  added?: SnapshotHandler;
  removed?: SnapshotHandler;
};

export function useQuery(predicate: QueryPredicate, options?: UseQueryOptions) {
  const engine = useEngine();
  const [query] = useState(() => {
    const query = new Query(predicate);
    if (options?.added) {
      query.onEntityAdded.connect(options.added);
    }
    if (options?.removed) {
      query.onEntityRemoved.connect(options.removed);
    }
    engine.addQuery(query);
    return query;
  });
  return query;
}
