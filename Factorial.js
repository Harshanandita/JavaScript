const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial() {
    rl.question("Enter the number you want to calculate factorial of or press q to exit: ", (n) => {
        if (n === 'q') {
            rl.close();
        }
        else if (isNaN(n)) {
            console.log("Invalid input! Please enter a valid number or press q to exit.");
            return factorial();
        }
        else {
            // [...Array(Number(n)).keys()].map(i => i+1);
            // Array.from(Array(Number(n)).keys()).map(i => i+1);

            console.log([...Array(Number(n)).keys()].map(i => i+1).reduce((a, b) => a*b));

            let ans = 1;
            for (let i = 1; i <= n; i++) {
                ans *= i;
            }
            console.log(ans);
            
            factorial();
        }
    });
}

factorial();