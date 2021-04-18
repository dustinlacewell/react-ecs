import { Facet } from "@react-ecs/core";
import { Vector3 } from "three";

export class Spin extends Facet<Spin> {
    amount = new Vector3(0, 0, 0);
}
