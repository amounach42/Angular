interface Person {
    firstName: string;
    lastName: string;
    age?: number;
    email?: string;
}

function updatePerson(person: Person, updatedPerson: Person): Person
{    
    return {...person, ...updatedPerson};
}


let person1: Person = {
    firstName : "abdessalam",
    lastName : "Mounach",
    age : 27,
    email : "amounach@1337.com"
}

let person2: Person = {
    firstName : "abdessalam",
    lastName : "Mounach",
    age : 25,
}

console.log(updatePerson(person1, person2))