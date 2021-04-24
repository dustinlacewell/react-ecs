import { Facet } from "@react-ecs/core";
import { Vector3 } from "three";

export class Velocity extends Facet<Velocity> {
    amount? = new Vector3(Math.random() - .5, Math.random() -.5, Math.random()-.5);
}
