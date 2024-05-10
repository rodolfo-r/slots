//Step 1: Deposit money
//Step 2: Determine number of lines to bet on
//Step 3: Collect bet amount
//Step 4: Spin
//Step 5: Check if won or loss
//Step 6: give winnings
//Step 7: play again

// function deposit() {
//     return 1
// }

const prompt = require("prompt-sync")();
//this is how the cool kids call functions
//vvvvvv
const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: $")
        //parseFloat
        //converts a string into a int or double
        // "17.25" => 17.25
        //if we get a string that isnt a number we get
        //"puppy" => NaN
        const numberDepositAmount = parseFloat(depositAmount)
        //isNaN checks if smth is not a number
        if(isNaN(numberDepositAmount) || numberDepositAmount <=0){
            console.log("Invalid deposit amount, put a number")
        }else {
            return numberDepositAmount;
        }
    }
};

const depositAmount = deposit();
console.log(depositAmount);