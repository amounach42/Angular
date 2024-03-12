// default export

export default function greet(name: string): string {
    return `Hello, ${name}!`;
}

// named export

export function greetByName(name: string): string {
    return `Hello, ${name}!`;
}