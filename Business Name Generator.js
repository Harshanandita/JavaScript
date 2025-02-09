const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,  
    output: process.stdout
});

let prefix = {
    "0": "Crazy",
    "1": "Amazing",
    "2": "Fire"
};

let product = {
    "0": "Engine",
    "1": "Foods",
    "2": "Garments"
};

let suffix = {
    "0": "Bros", 
    "1": "Limited", 
    "2": "Hub" 
};

function f() {
    rl.question("Press c to generate business name or press q to exit: ", (input) => {
        if (input === 'q') {
            rl.close();
        }
        else if (input === 'c') {
            console.log(`${prefix[Math.floor(Math.random() * Object.keys(prefix).length)]} ${product[Math.floor(Math.random() * Object.keys(product).length)]} ${suffix[Math.floor(Math.random() * Object.keys(suffix).length)]}`);
            f();
        }
        else {
            console.log("Invalid input! Please enter c to continue or q to exit.");
            return f();
        }
    });
}

f();