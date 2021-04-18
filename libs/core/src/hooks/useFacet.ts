import {
    useEffect,
    useState,
} from "react";
import { Class } from "tick-knock";

import { useEntity } from "./useEntity";

export function useFacet<T>(type: Class<T>) {
    const entity = useEntity();
    const [facet, setFacet] = useState<T>(new type());

    useEffect(() => {
        const facet = entity.get(type);
        if (facet) {
            setFacet(facet);
        } else {
            console.error(
                `Couldn't find facet on entity: ${type.prototype.constructor.name}`,
            );
        }
    });

    return facet as Required<T>;
}
