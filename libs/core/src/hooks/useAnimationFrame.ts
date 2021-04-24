import {
    useEffect,
    useRef,
} from "react";

export const useAnimationFrame = (callback: (dt: number) => void) => {
    const requestRef = useRef<number>((null as unknown) as number);
    const previousTimeRef = useRef<number>((null as unknown) as number);

    const animate = (time: number) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime / 1000);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);
};
