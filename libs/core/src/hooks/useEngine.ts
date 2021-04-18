import { useContext } from "react";

import { ECSContext } from "../components/ECS";

export const useEngine = () => {
    const { engine } = useContext(ECSContext);
    return engine;
};
