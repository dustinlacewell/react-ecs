// import { useFrame } from "@react-three/fiber";
// import { NaiveBroadphase, World } from "cannon-es";
// import React, { FC } from "react";
// import { Entity, EntitySnapshot } from "tick-knock";
// import RigidBody from "../components/RigidBody";

// import { PhysicsContext } from "../../../hooks/usePhysics"
// import { useQuery } from "../../../hooks";

// type PhysicsSystemProps = {
//     world?: World
// }

// const PhysicsSystem: FC<PhysicsSystemProps> = (props) => {
//     let world = props.world;

//     if (world === undefined) {
//         world = new World();
//         world.gravity.set(0,-10,0);
//         world.broadphase = new NaiveBroadphase();
//     }

//     const query = useQuery((e: Entity) => e.has(RigidBody), {
//         added: ({current, previous}: EntitySnapshot) => {
//             const rigidBody = current.get(RigidBody)!;
//             const { body } = rigidBody.state;
//             world!.addBody(body);
//         },
//         removed: ({current, previous}: EntitySnapshot) => {
//             const rigidBody = current.get(RigidBody)!;
//             const { body } = rigidBody.state;
//             world!.removeBody(body);

//         },
//     });

//     useFrame((state: any, dt: number) => {
//         world!.step(1 / 60, dt, 3);
//         query.loop([RigidBody], (entity, [rigidBody]) => {
//             const { body: { position, quaternion} } = rigidBody.state;
//             const entityPosition = entity.group.position;
//             const entityQuaternion = entity.group.quaternion;

//             entityPosition.x = position.x;
//             entityPosition.y = position.y;
//             entityPosition.z = position.z;
//             entityQuaternion.x = quaternion.x;
//             entityQuaternion.y = quaternion.y;
//             entityQuaternion.z = quaternion.z;
//             entityQuaternion.w = quaternion.w;
//         });
//     });

//     return (
//         <PhysicsContext.Provider value={world}>
//             {props.children}
//         </PhysicsContext.Provider>
//     )
// };

// export default PhysicsSystem;
