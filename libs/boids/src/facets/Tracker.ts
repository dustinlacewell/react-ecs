import { Facet } from "@react-ecs/core";
import { ThreeView } from "@react-ecs/three";
import { RefObject } from "react";
import { Line2 } from "three-stdlib";

export class Tracker extends Facet<Tracker> {
    targetView: ThreeView;
    pointerRef: RefObject<Line2>

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Tracker as any).__componentClassId__ = 99;
