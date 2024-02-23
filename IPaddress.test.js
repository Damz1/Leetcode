const { defandIPaddr } = require("./IPaddress");

describe("defandIPaddr", () => {
  test("should return correct for 1.1.1.1", () => {
    let input = "1.1.1.1";
    let output = "1[.]1[.]1[.]1";

    expect(defandIPaddr(input)).toBe(output);
  });
});
