const { sum, mul } = require("./math-file-module")
const { getLuckyNumber } = require("./utils")
const chalk = require("chalk")

console.log(sum(4,6))
console.log(mul(4,6))

console.log("My Lucky Number is : ", getLuckyNumber());

console.log(chalk.green("I got lucky today!!"))