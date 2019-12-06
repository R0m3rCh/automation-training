var calculator = require("../calculator.js")

describe("Operations", function() {
  it("The function should add 2 numbers",function() {
    var value = calculator.addition(3, 7)
    expect(value).toBe(10)
  })

  it("The function should rest 2 numbers",function() {
    var value = calculator.subtraction(8, 2)
    expect(value).toBe(6)
  })

  it("The function should return the product of 2 numbers",function() {
    var value = calculator.multiplication(8, 2)
    expect(value).toBe(16)
  })

  it("The function should return the divition of 2 numbers",function() {
    var value = calculator.division(8, 2)
    expect(value).toBe(4)
  })
})
