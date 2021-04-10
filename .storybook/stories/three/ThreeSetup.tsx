import * as React from 'react';
import { FC } from 'react';

import * as THREE from 'three';
import { Vector3 } from 'three';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export type ThreeSetupProps = {
  cameraFov?: number
  cameraPosition?: Vector3
  controls?: boolean
  lights?: boolean
}

export const ThreeSetup: FC<ThreeSetupProps> = ({
  children,
  cameraFov = 75,
  cameraPosition = new THREE.Vector3(-5, 5, 5),
  controls = true,
  lights = true,
  ...restProps
}) => {
  return (
    <Canvas shadows camera={{ position: cameraPosition, fov: cameraFov }} dpr={window.devicePixelRatio} {...restProps}>
      {lights && (
        <>
          <ambientLight intensity={0.8} />
          <pointLight intensity={1} position={[0, 6, 0]} />
        </>
      )}
      {controls && <OrbitControls />}

      {children}
    </Canvas>
  )
}

export const ThreeStory = (Story: any) => <ThreeSetup><Story /></ThreeSetup>;