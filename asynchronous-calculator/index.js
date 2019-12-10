const VALIDATOR = require('./validator.js')
const CALCULATOR = require('./calculator.js')

let a = 6
let b = 2

function tgCreation(){
  CALCULATOR.subtraction(a, b, (res) => {
      console.log("SUSTRACTION WITH CALLBACK: " + res)
  })
}

async function getDivision() {
  var result = await CALCULATOR.division(a, b);
  console.log("DIVISION WITH ASYNC AWAIT: " + result);
}

if(VALIDATOR.validate(a, b)) {
  console.log("SIMPLE ADDITION: " + CALCULATOR.addition(a, b))
  tgCreation()
  CALCULATOR.multiplication(a, b)
  .then(function(res){
    console.log("MULTIPLICATION WITH PROMISE: " + res)
  })
  getDivision()
}
