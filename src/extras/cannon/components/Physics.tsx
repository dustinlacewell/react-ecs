// import { NaiveBroadphase, World } from "cannon-es";
// import React, { FC } from "react";
// import { PhysicsContext } from "../../../hooks/usePhysics"

// type PhysicsProps = {
//     world?: World
// }

// const Physics: FC<PhysicsProps> = (props) => {
//     let world = props.world;
//     if (!world) {
//         world = new World();
//         world.gravity.set(0,-10,0);
//         world.broadphase = new NaiveBroadphase();
//     }

//     return (
//         <PhysicsContext.Provider value={world}>
//             {props.children}
//         </PhysicsContext.Provider>
//     )
// }

// export default Physics;
