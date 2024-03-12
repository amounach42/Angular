class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}


class Dog extends Animal {
    move(distanceInMeters: number = 100) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let dawg = new Dog("naizam");
(dawg.move(150));

