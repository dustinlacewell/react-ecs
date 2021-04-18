import { rad } from "@react-ecs/core";
import {
    OrthographicCamera,
    useCamera,
    useGLTF,
} from "@react-three/drei";
import {
    createPortal,
    useFrame,
    useThree,
} from "@react-three/fiber";
import React, {
    MutableRefObject,
    useMemo,
    useRef,
    useState,
} from "react";
import {
    Group,
    Matrix4,
    Mesh,
    Scene,
} from "three";

import { Jack } from "../Jack";

const LOGO_PATH = '/models/react-ecs-logo.gltf';

export function Viewcube() {
    const { nodes } = useGLTF(LOGO_PATH);
    const geometry = (nodes.jacks as Mesh).geometry;

    const { gl, scene, camera, size } = useThree()
    const virtualScene = useMemo(() => new Scene(), [])
    const virtualCam = useRef()
    const ref = useRef<Group>()
    const [hover, set] = useState(null)
    const matrix = new Matrix4()

    useFrame(() => {
        ref.current?.quaternion.setFromRotationMatrix(matrix)
        camera.matrix.invert()
        gl.autoClear = true
        gl.render(scene, camera)
        gl.autoClear = false
        gl.clearDepth()
        gl.render(virtualScene, virtualCam.current)

    }, 1)

    return <>{createPortal(
        <>
            <Jack
                ref={ref}
                raycast={useCamera(virtualCam)}
                scale={10}
                position={[-size.width / 2 + 60, size.height / 2 - 60, 0]}
                rotation={[rad(35), 0, 0]}
            />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <OrthographicCamera ref={virtualCam} makeDefault={false} position={[0, 0, 100]} />
        </>,
        virtualScene,
    )}</>
}

useGLTF.preload(LOGO_PATH)
