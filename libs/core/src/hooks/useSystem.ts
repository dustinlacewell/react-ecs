import {
    useContext,
    useEffect
} from 'react';

import { ECSContext } from '../components/ECS';
import { System } from '../lib/System';

export const useSystem = (callback: System, priority = 0) => {
    const { systems } = useContext(ECSContext);

    useEffect(() => {
        systems.add(callback, priority);
        return () => {
            systems.remove(callback);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callback, priority]);
    return null;
};
