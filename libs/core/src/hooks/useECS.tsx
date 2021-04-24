import {
    useEffect,
    useState,
} from "react";

import { ECS } from "../components/ECS";

export function useECS() {
    const [state] = useState(() => {
        const ecs = new ECS();
        return ecs;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).ecs = state;
        }
    })

    return state;
}
