 function addition(a, b) {
   return result = a + b
 }

// function subtraction(a, b) {
//   return result = a - b
// }

function subtraction(a, b, callback){
  setTimeout(function(){
      callback(a - b);
  }, 1000)
}

function multiplication(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a * b)
    }, 2000)
  })
}

function division(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a / b)
    }, 3000)
  })
}

module.exports = {
  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication,
  division: division
}
