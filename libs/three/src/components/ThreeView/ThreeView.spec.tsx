import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { render } from "@testing-library/react";
import React from "react";

import { ThreeView } from "./index";

describe('ThreeView', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Canvas>
                <ThreeView>
                    <Box />
                </ThreeView>
            </Canvas>);
        expect(baseElement).toBeTruthy();
    });
});
