import {
    Component,
    ReactNode
} from 'react';

export type Tuple3 = [number, number, number];

export type PickRename<T, K extends keyof T, R extends PropertyKey> = Omit<
    T,
    K
> &
    { [P in R]: T[K] };

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
export type Constructor<T = {}> = new (...args: any[]) => T;

export type Constructors<T extends Constructor[]> = readonly [...T];

export type Instances<T extends Constructor[], K extends Constructors<T>> = {
    [I in keyof K]: K[I] extends Constructor<infer U>
    ? Required<NonFunctionProperties<Omit<U, keyof Component>>>
    : never;
};


export type NonFunctionPropertyNames<T> = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export type EmptyProps = { children: ReactNode };

export type AnyObject = Record<string, unknown>;


export function rad(degrees) {
    return degrees * Math.PI / 180;
}

export function deg(radians) {
    return radians * 180 / Math.PI;
}
