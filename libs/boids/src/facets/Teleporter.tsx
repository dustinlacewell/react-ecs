import { Box } from "@react-three/drei";
import React, { FC } from "react";

import { TeleportSystem } from "../systems/TeleportSystem";

type TeleporterProps = {
    size: number;
    showBounds?: boolean;
}

export const Teleporter: FC<TeleporterProps> = (props: TeleporterProps) => {
    return (
        <>
            <TeleportSystem size={props.size} />
            {props.showBounds && <>
                <Box scale={3}/>
                <Box position={[props.size, props.size, props.size]} />
                <Box position={[-props.size, -props.size, -props.size]} />
                <Box position={[props.size, -props.size, props.size]} />
                <Box position={[-props.size, props.size, -props.size]} />

                <Box position={[props.size, props.size, -props.size]} />
                <Box position={[-props.size, -props.size, props.size]} />
                <Box position={[props.size, -props.size, -props.size]} />
                <Box position={[-props.size, props.size, props.size]} />
            </>}
        </>
    )
}
