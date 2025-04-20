
let age: number = 25;
let greeting: string = "Hello, World!";
let isLoggedIn: boolean = true;
let colors: string[] = ["red", "green", "blue"];

function Details() {
    console.log(`Age: ${age}`);
    console.log(`Greeting: ${greeting}`);
    console.log(`Logged In: ${isLoggedIn}`);
    console.log(`Colors: ${colors.join(", ")}`);
}

Details();
