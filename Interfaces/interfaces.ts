interface Vehicle {
    make: string;
    model: string;
    year?: number;
}

function createVehicle(vehicle: Vehicle) {
    return vehicle
}

let car: Vehicle = {
    make: "germany",
    model: "fiesta",
}

console.log(createVehicle(car))