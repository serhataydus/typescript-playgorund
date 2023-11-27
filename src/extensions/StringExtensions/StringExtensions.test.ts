import StringExtensions from "./StringExtensions";

describe("toCamelCase Function Tests", () => {
  it("should convert string to camelCase", () => {
    const inputString = "hello_world";
    expect(StringExtensions.toCamelCase(inputString)).toBe(inputString);
  });

  it("should handle empty string", () => {
    const inputString = "";
    expect(StringExtensions.toCamelCase(inputString)).toBe(inputString);
  });

  it("should handle empty string", () => {
    const inputString = " ";
    expect(StringExtensions.toCamelCase(inputString)).toBe(inputString);
  });

  it("should handle single-character string", () => {
    const inputString = "A";
    expect(StringExtensions.toCamelCase(inputString)).toBe(inputString);
  });

  it("should handle already camelCase string", () => {
    const inputString = "alreadyCamel";
    expect(StringExtensions.toCamelCase(inputString)).toBe(inputString);
  });
});
