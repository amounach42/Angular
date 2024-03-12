export {}
function createEmail(to: string, subject?: string) {
    return (subject) ? to + " " + subject 
        :  to + " " + "No Subject"
}

console.log(createEmail("amounach", "Confirmation"))

function add(x: number, y: number, z?: number): number {
    return (z) ? x + y + z : x + y;
}


let result: number =  add(10, 10, 5);

console.log(result)