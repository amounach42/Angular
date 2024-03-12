import greet, { greetByName } from "./greeter";

const defaultGreeting = greet("amounach")
const namedGreeting = greetByName("ahmed")

console.log(defaultGreeting)