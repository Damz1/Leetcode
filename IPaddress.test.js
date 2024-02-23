const { defandIPaddr } = require("./IPaddress");

describe("defandIPaddr", () => {
  test("should return correct for 1.1.1.1", () => {
    let input = "1.1.1.1";
    let output = "1[.]1[.]1[.]1";

    expect(defandIPaddr(input)).toBe(output);
  });
  test("should return correct for 1.1.1.1", () => {
    let input = "255.100.50.0";
    let output = "255[.]100[.]50[.]0";

    expect(defandIPaddr(input)).toBe(output);
  });
});
