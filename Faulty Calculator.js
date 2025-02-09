const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let faultyOperation = {
    '+': '-',
    '*': '+',
    '-': '/',
    '/': '**'
};

function f() {
    rl.question("Enter an operation (+, -, *, /) or press q to exit: ", (c) => {
        if (c === 'q') {
            rl.close();
        }
        else if (['+', '-', '*', '/'].includes(c)) {
            rl.question("Enter the numbers seperated by space: ", (input) => {
                let [a, b] = input.split(' ').map(Number);

                if (isNaN(a) || isNaN(b)) {
                    console.log("Invalid input! Please enter valid numbers.");
                    return f();
                }

                let random = Math.floor(Math.random()*100)+1;
                let result;

                if (random <= 10) {
                    if (c === '-' && b === 0) {
                        console.log("Error! Division by zero is not allowed.");
                        return f();
                    }
                    result = eval(`${a} ${faultyOperation[c]} ${c}`);
                }
                else {
                    if (c === '/' && b === 0) {
                        console.log("Error! Division by zero is not allowed.")
                        return f();
                    }
                    result = eval(`${a} ${c} ${b}`);
                }

                console.log(result);

                f();
            });
        }
        else {
            console.log("Invalid operation! Please enter +, -, *, / or q.");
            return f();
        }
    });
}

f();