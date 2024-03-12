/*
1. Define a namespace `Calculator` with a class `BasicCalculator` 
    and use it in another file without importing.
*/

namespace Calculator {
    export class BasicCalculator {

        constructor() {
            console.log("BasicCalculator constructor called!")
        }
        multiply(a: number, b: number) {
            console.log(a * b)
        }
    }
}
