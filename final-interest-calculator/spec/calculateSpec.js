const { calculate } = require("../script.js");

describe("calculate", function () {
  it("converts string inputs to numbers and returns a finite monthly payment", function () {
    const monthly = calculate("100000", "6", "30");
    expect(monthly).toBeGreaterThan(0);
    expect(Number.isFinite(monthly)).toBe(true);
  });

  it("returns 0 monthly payment when term rounds to zero months", function () {
    expect(calculate(1000, 5, 0)).toBe(0);
  });
});
