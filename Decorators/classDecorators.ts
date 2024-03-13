/*

1. Create a decorator `@logged` that logs whenever a 
    new instance of a class is created.
*/

function Logged(constructor: Function, ...args: any[]): void
{
    console.log("logged decorator called!")
    console.log(constructor)
}

@Logged
class User {
   private name: string;

   constructor(private _name: string) {
    console.log("User constructor called!")
    this._name = this.name;
   }
}