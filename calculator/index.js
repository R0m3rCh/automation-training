const VALIDATOR = require('./validator.js')
const CALCULATOR = require('./calculator.js')

let a = 6
let b = 2

if(VALIDATOR.validate(a, b)) {
  console.log(CALCULATOR.addition(a, b))
  console.log(CALCULATOR.subtraction(a, b))
  console.log(CALCULATOR.multiplication(a, b))
  console.log(CALCULATOR.division(a, b))
}