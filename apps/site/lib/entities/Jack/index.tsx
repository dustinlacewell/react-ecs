import { Entity } from "@react-ecs/core";
import { ThreeView } from "@react-ecs/three";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import React, {
    ForwardedRef,
    forwardRef,
    ReactNode,
} from "react";
import {
    Mesh,
    Vector3,
} from "three";

import { Spin } from "../../facets/Spin";
import { getAssetPath } from "../../utils";

const LOGO_PATH = getAssetPath('models/react-ecs-logo.gltf');

// eslint-disable-next-line react/display-name
export const Jack = forwardRef((props: GroupProps, ref: ForwardedRef<ReactNode>) => {
    const { nodes } = useGLTF(LOGO_PATH);
    const geometry = (nodes.jacks as Mesh).geometry;
    return (
        <Entity>
            <Spin amount={new Vector3(0, 6, 0)} />
            <ThreeView>
                <group ref={ref} {...props} dispose={null}>
                    <mesh
                        geometry={geometry}>
                        <meshBasicMaterial />
                    </mesh>
                </group>
            </ThreeView>
        </Entity>
    )
})

useGLTF.preload(LOGO_PATH)
