function validate(a, b) {
  if(typeof a == 'number' && typeof b == 'number') {
    if(a >= 0 && b >= 0) {
      return true
    } else {
      console.log("Values can't be negative.")
      return false
    }
  } else {
      console.log("Values have to be numeric.")
      return false
  }
}

exports.validate = validate