/*
1. Try to access the `name` property from outside the `Person` class and observe the TypeScript error.
2. Add a public method to the `Person` class that returns the `name` property.
*/
class Person {
    private name: string;
    constructor (name: string) { this.name = name; }

    public getName (): string {
        return this.name;
    }
} 

let pr1 = new Person("abdo")

console.log(pr1.getName());