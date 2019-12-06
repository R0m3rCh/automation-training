var validator = require("../validator.js")

describe("Validations", function() {
    it("The function should return false if values are negative",function() {
      var value = validator.validate(-3, -7)
      expect(value).toBe(false)
    })

    it("The function should return false if numbers are negative",function() {
        var value = validator.validate('3', '7')
        expect(value).toBe(false)
      })
  })