var calculator = require("../calculator.js")

describe("Operations", function() {
  it("Returns the addition of 2 numbers",function() {
    var value = calculator.addition(3, 7)
    expect(value).toBe(10)
  })

  it("Returns the substraction of 2 numbers",function() {
    var value = calculator.subtraction(8, 2)
    expect(value).toBe(6)
  })

  it("Returns the product of 2 numbers",function() {
    var value = calculator.multiplication(8, 2)
    expect(value).toBe(16)
  })

  it("Returns the divition of 2 numbers",function() {
    var value = calculator.division(8, 2)
    expect(value).toBe(4)
  })
})
