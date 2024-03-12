// 1. Create a numeric enum `Response` with values `No = 0`, `Yes = 1`, and use it in a function.

enum Res {
    No = "NO",
    Yes = "YES"
}

function test(n: number) {
    if (n === 1)
        return Res.Yes;
    return Res.No;
}

// ### String Enums

enum Message {
    Success = "Success",
    Failure = "FAILURE",
}

function login(loggedIn: boolean) {
    if (loggedIn === true)
        return Message.Success;
    return Message.Failure;
}

// ### Union Types

function padLeft(value: string, padding: string | number) {
    if (typeof(padding) === "string")
        return padding + " " + value;
    if (typeof(padding) === "number")
        return Array(padding + 1).join("") + value;
    else {
        throw new Error('Invalid padding type.');
    }
}

console.log(padLeft("amounach", 5))