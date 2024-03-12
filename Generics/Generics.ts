/*
1. Use the `identity` function with different types and observe the inferred return type.
2. Extend the `identity` function to log the type of `arg` using `typeof`.
*/

export function identity<T>(arg: T): T {
    console.log(typeof(arg))
    return arg;
}

console.log(identity("ss"))
console.log(identity(true))
console.log(identity(500))