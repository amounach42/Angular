export {}
enum Season {"Spring", "Summer", "Autumn", "Winter"}
let winter:Season = Season.Winter;
let summer:Season = Season.Summer
console.log(summer)


function logValue(arg: any) {
    console.log(arg)
}


function noReturn(): void {
    console.log("No return")
}


logValue("Hey")
noReturn()