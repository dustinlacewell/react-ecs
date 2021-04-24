import {
    useQuery,
    useSystem
} from '@react-ecs/core';
import { ThreeView } from '@react-ecs/three';
import { FC } from 'react';
import { Entity } from 'tick-knock';

import { Neighbor } from '../facets/Neighbor';

type NeighborSystemProps = {
    radius: number;
    filter?: (self: Entity, other: Entity) => boolean;
}

export const NeighborSystem: FC<NeighborSystemProps> = (props) => {
    const query = useQuery(e => e.hasAll(ThreeView, Neighbor));

    return useSystem((dt) => {
        query.loop([ThreeView, Neighbor], (e, [view, neighbor]) => {
            // current boid
            const o3d = view.object3d;

            // helpers
            const objFor = (entity: Entity) =>
                entity.get(ThreeView).object3d;
            const distTo = (entity: Entity) =>
                o3d.position.distanceTo(objFor(entity).position);

            // store current neighbors on Neighbor facet
            // will be used by aligntment, cohesion and avoidance systems
            neighbor.meta.neighbors = query.entities
                .filter(_e => _e.id !== e.id)
                .filter(_e => props.filter ? props.filter(e, _e) : true)
                .filter(_e => distTo(_e) < props.radius)
                .sort((a, b) => distTo(a) - distTo(b))
        })
    })
}
