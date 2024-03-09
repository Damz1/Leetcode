const { longestNiceSubstring } = require("./longestNiceSubstring");

describe("longestNiceSubstring", () => {
  it('returns the longest nice substring for "YazaAay"', () => {
    expect(longestNiceSubstring("YazaAay")).toBe("aAa");
  });

  it('returns the whole string for "Bb"', () => {
    expect(longestNiceSubstring("Bb")).toBe("Bb");
  });

  it('returns an empty string for "c"', () => {
    expect(longestNiceSubstring("c")).toBe("");
  });

  it('returns "Bb" for "ABb"', () => {
    expect(longestNiceSubstring("ABb")).toBe("Bb");
  });

  it('returns "cCbBcCc" for "aacCbBcCc"', () => {
    expect(longestNiceSubstring("aacCbBcCc")).toBe("cCbBcCc");
  });

  it('returns "" for "aaaabbb"', () => {
    expect(longestNiceSubstring("aaaabbb")).toBe("");
  });

  it('returns "DDDdD" for "DDDdD"', () => {
    expect(longestNiceSubstring("DDDdD")).toBe("DDDdD");
  });
});
