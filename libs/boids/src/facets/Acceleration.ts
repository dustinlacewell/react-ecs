import { Facet } from "@react-ecs/core";
import { Vector3 } from "three";

export class Acceleration extends Facet<Acceleration> {
    amount? = new Vector3(0, 0, 0);
}
