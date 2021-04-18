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
            (window as any).ecs = state;
        }
    })

    return state;
}
