const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One dollar should be 106.58 yens", () => {
    expect(fromDollarToYen(55)).toBe(5862.083333333334)
})

test("One euro should be 1.206 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBe(4.2)
})

test("One yen should be 0.00625 pounds", () => {
    expect(fromYenToPound(2000)).toBe(12.509773260359657)
})