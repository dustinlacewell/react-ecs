import {
    Entity,
    Facet,
    useQuery,
    useSystem,
} from "@react-ecs/core";
import { ThreeView } from "@react-ecs/three";
import React, { useRef } from "react";
import {
    BufferGeometry,
    Color,
    Line,
    LineBasicMaterial,
    Object3D,
    Vector3,
} from "three";
import { Entity as KnockEntity } from "tick-knock";

import { Neighbor } from "../facets/Neighbor";

class NeighborDebugger extends Facet<NeighborDebugger> {
    targetView: ThreeView;
    targetNeighorhood: Neighbor;
}

const material = new LineBasicMaterial( { color: new Color(
    Math.random(),
    Math.random(),
    Math.random(),
) } );

const zeroPoint = new Vector3();
const zeroLine = [zeroPoint, zeroPoint];

class LinePool {
    pool: Line[];

    constructor() {
        this.pool = [];
    }

    fetch(parent: Object3D, v1: Vector3, v2: Vector3) {
        if (this.pool.length) {
            const line = this.pool.pop();
            line.geometry.setFromPoints([v1, v2]);
            parent.attach(line)
            return line;
        } else {
            const points = [v1, v2];
            const geometry = new BufferGeometry();
            const line = new Line( geometry, material );
            line.geometry.setFromPoints(points)
            parent.attach(line)
            return line;
        }
    }

    reset(line: Line) {
        const vec = new Vector3();
        line.parent.remove(line);
        line.position.set(0, 0, 0)
        line.geometry.setFromPoints(zeroLine)
        this.pool.push(line)
    }
}

export const NeighborDebugSystem = (props) => {
    let id = 0;
    const pool = useRef(new LinePool())
    const targetQuery = useQuery(e => e.hasAll(ThreeView, Neighbor));
    const debugQuery = useQuery(e => e.hasAll(ThreeView, NeighborDebugger));

    const create = (target: KnockEntity) => {
        const key = id++;
        const targetView = target.get(ThreeView)
        const targetNeighorhood = target.get(Neighbor)
        if (!targetView) return null;
        return (
            <Entity key={key}>
                <NeighborDebugger
                    targetView={targetView}
                    targetNeighorhood={targetNeighorhood} />
                <ThreeView>
                    <group position={targetView.object3d.position} />
                </ThreeView>
            </Entity>
        )
    }


    useSystem((dt) => {
        debugQuery.loop([ThreeView, NeighborDebugger], (e, [view, debug]) => {
            const debugObj = view.object3d;
            const targetObj = debug.targetView.object3d;


            let idx = 0;

            const children = [...debugObj.children];

            for (const neighbor of debug.targetNeighorhood.meta.neighbors) {
                const neighborPosition = neighbor.get(ThreeView).object3d.position;
                const oldLine = children.pop() as Line;
                if (oldLine) {
                    oldLine.geometry.setFromPoints([
                        targetObj.position,
                        neighborPosition,
                    ]);
                } else {
                    pool.current.fetch(
                        debugObj,
                        targetObj.position,
                        neighborPosition,
                    );
                }
                idx++;
            }
            children.forEach(c => pool.current.reset(c as Line))
        })
    })

    return targetQuery.entities?.map(create) || null;


}
