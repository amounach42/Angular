/*
1. Implement the `GenericIdentityFn` interface with a function that returns its argument.
2. Create an interface `GenericArray` with a generic type that represents an array of that type.
*/ 

import { identity } from "../Generics/Generics";

interface GenericIdentityFn<T> {
    (arg: T): T;
} 

let identifier: GenericIdentityFn<string> = identity;

interface GenericArray<T> {
    [index: number] : T;
}

let array: GenericArray<string> = ["ss", "tt"]
console.log(array)