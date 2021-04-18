import { Facet } from "@react-ecs/core";
import { Entity } from "tick-knock";

type NeighborMeta = {
    neighbors: Entity[]
}

export class Neighbor extends Facet<Neighbor> {
    meta: NeighborMeta = { neighbors: [] }
}
