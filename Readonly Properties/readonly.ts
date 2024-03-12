interface Circle {
   readonly centerX: number;
   readonly centerY: number;
   readonly radius: number;
}

function moveCircle(circle: Circle, newX: number, newY:number ): Circle {

    let newPos: Circle = {
        ...circle,
        centerX: newX,
        centerY: newY,
    }
    
    return newPos;
}

let circle = {
    centerX: 20,
    centerY: 10,
    radius: 15
}
console.log(moveCircle(circle, 15, 0))