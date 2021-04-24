import {
    MutableRefObject,
    useRef,
    useState
} from 'react';

export function useStatefulRef<T>(
    inst: T,
): [MutableRefObject<T>, (inst: T) => void] {
    const ref = useRef<T>(inst);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setState] = useState({ current: inst });
    const setRef = (current: T) => {
        ref.current = current;
        setState({ current });
    };

    return [ref, setRef];
}
