#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to codeWithSidra - currency converor\n"));
//define the list of currencies and their exchange rates:
let exchange_rate = {
    "USD": 1, // BASE CURRENCY
    "EUR": 0.9, //European crrency(euro)
    "jyp": 113, //Japanese currency (yen)
    "CAD": 1.3, //Canadian dollor
    "AUD": 1.65, //Australian Dollor
    "PKR": 277.70 // Pakistani rupees
    // Add more currencies and their exchange rates here
};
// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "enter the amount to convert:"
    }
]);
// Perform currency conversion by using formula:
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount
console.log(`converted amount: ${chalk.green(converted_amount.toFixed(2))}`);
