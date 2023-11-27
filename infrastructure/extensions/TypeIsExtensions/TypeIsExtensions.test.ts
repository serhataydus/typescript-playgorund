import TypeIsExtensions from "./TypeIsExtensions";

describe("isHtml Function Tests", () => {
  it("should return true for valid HTML", () => {
    const validHtml = "<div>Hello</div>";
    expect(TypeIsExtensions.isHtml(validHtml)).toBe(true);
  });

  it("should return false for non-HTML text", () => {
    const nonHtmlText = "This is not HTML";
    expect(TypeIsExtensions.isHtml(nonHtmlText)).toBe(false);
  });
});

describe("isValidJson Function Tests", () => {
  it("should return true for valid JSON", () => {
    expect(
      TypeIsExtensions.isValidJson(
        `{"name":"bla bla","values":[{"key":"key1","value":"value1"}],"level":{"name":"level bla bla","values":[{"key":"levelkey1","value":"levelvalue1"}]}}`
      )
    ).toBe(true);
  });

  it("should return true for valid JSON", () => {
    expect(TypeIsExtensions.isValidJson(`[{"key": "value"}]`)).toBe(true);
  });

  it("should return false for invalid JSON", () => {
    expect(TypeIsExtensions.isValidJson(`{"key": "value",}`)).toBe(false);
  });

  it("should return false for invalid JSON", () => {
    expect(TypeIsExtensions.isValidJson(``)).toBe(false);
  });
});

describe("isNumber Function Tests", () => {
  it("isNumber returns true for valid number string", () => {
    const validNumberString = "42";
    const result = TypeIsExtensions.isNumber(validNumberString);

    // Check if the result is true
    expect(result).toBe(true);
  });

  it("isNumber returns false for invalid number string", () => {
    const invalidNumberString = "invalidNumber";
    const result = TypeIsExtensions.isNumber(invalidNumberString);

    // Check if the result is false
    expect(result).toBe(false);
  });
});

describe("isBoolean Function Tests", () => {
  it("isBoolean returns true for valid boolean string (true)", () => {
    const trueString = "true";
    const result = TypeIsExtensions.isBoolean(trueString);

    // Check if the result is true
    expect(result).toBe(true);
  });

  it("isBoolean returns true for valid boolean string (false)", () => {
    const falseString = "false";
    const result = TypeIsExtensions.isBoolean(falseString);

    // Check if the result is true
    expect(result).toBe(true);
  });

  it("isBoolean returns false for invalid boolean string", () => {
    const invalidBooleanString = "invalidBoolean";
    const result = TypeIsExtensions.isBoolean(invalidBooleanString);

    // Check if the result is false
    expect(result).toBe(false);
  });
});

describe("isEmailAddress Function Tests", () => {
  it("isEmailAddress returns true for valid email address", () => {
    const validEmailAddress = "test@example.com";
    const result = TypeIsExtensions.isEmailAddress(validEmailAddress);

    // Check if the result is true
    expect(result).toBe(true);
  });

  it("isEmailAddress returns false for invalid email address", () => {
    const invalidEmailAddress = "invalidEmail";
    const result = TypeIsExtensions.isEmailAddress(invalidEmailAddress);

    // Check if the result is false
    expect(result).toBe(false);
  });

  it("isEmailAddress returns false for empty string", () => {
    const emptyString = "";
    const result = TypeIsExtensions.isEmailAddress(emptyString);

    // Check if the result is false
    expect(result).toBe(false);
  });

  it("isEmailAddress returns false for whitespace string", () => {
    const whitespaceString = " ";
    const result = TypeIsExtensions.isEmailAddress(whitespaceString);

    // Check if the result is false
    expect(result).toBe(false);
  });
});

describe("isObjectNull Function Tests", () => {
  it("returns true for null or undefined object", () => {
    expect(TypeIsExtensions.isObjectNull(null)).toBe(true);
    expect(TypeIsExtensions.isObjectNull(undefined)).toBe(true);
    expect(TypeIsExtensions.isObjectNull({})).toBe(false);
  });
});

describe("isObjectNotNull Function Tests", () => {
  it("returns true for non-null or undefined object", () => {
    expect(TypeIsExtensions.isObjectNotNull({})).toBe(true);
    expect(TypeIsExtensions.isObjectNotNull(null)).toBe(false);
    expect(TypeIsExtensions.isObjectNotNull(undefined)).toBe(false);
  });
});

describe("isStringNull Function Tests", () => {
  it("returns true for null or undefined string", () => {
    expect(TypeIsExtensions.isStringNull(null)).toBe(true);
    expect(TypeIsExtensions.isStringNull(undefined)).toBe(true);
    expect(TypeIsExtensions.isStringNull("")).toBe(true);
    expect(TypeIsExtensions.isStringNull("Hello")).toBe(false);
  });
});

describe("isStringNotNull Function Tests", () => {
  it("returns true for non-null or undefined string", () => {
    expect(TypeIsExtensions.isStringNotNull("")).toBe(false);
    expect(TypeIsExtensions.isStringNotNull(null)).toBe(false);
    expect(TypeIsExtensions.isStringNotNull(undefined)).toBe(false);
    expect(TypeIsExtensions.isStringNotNull("Hello")).toBe(true);
  });
});

describe("isStringNullOrWhiteSpace Function Tests", () => {
  it("returns true for null or undefined string", () => {
    expect(TypeIsExtensions.isStringNullOrWhiteSpace(null)).toBe(true);
    expect(TypeIsExtensions.isStringNullOrWhiteSpace(undefined)).toBe(true);
  });

  it("returns true for string with only whitespace", () => {
    expect(TypeIsExtensions.isStringNullOrWhiteSpace("   ")).toBe(true);
    expect(TypeIsExtensions.isStringNullOrWhiteSpace("\t\n")).toBe(true);
  });

  it("returns false for non-null or undefined string with non-whitespace characters", () => {
    expect(TypeIsExtensions.isStringNullOrWhiteSpace("Hello")).toBe(false);
    expect(TypeIsExtensions.isStringNullOrWhiteSpace("   Hello   ")).toBe(
      false
    );
  });
});

describe("isStringNotNullOrWhiteSpace Function Tests", () => {
  it("returns false for null or undefined string", () => {
    expect(TypeIsExtensions.isStringNotNullOrWhiteSpace(null)).toBe(false);
    expect(TypeIsExtensions.isStringNotNullOrWhiteSpace(undefined)).toBe(false);
  });

  it("returns false for string with only whitespace", () => {
    expect(TypeIsExtensions.isStringNotNullOrWhiteSpace("   ")).toBe(false);
    expect(TypeIsExtensions.isStringNotNullOrWhiteSpace("\t\n")).toBe(false);
  });

  it("returns true for non-null or undefined string with non-whitespace characters", () => {
    expect(TypeIsExtensions.isStringNotNullOrWhiteSpace("Hello")).toBe(true);
    expect(TypeIsExtensions.isStringNotNullOrWhiteSpace("   Hello   ")).toBe(
      true
    );
  });
});

describe("isNumberNull Function Tests", () => {
  it("returns true for null or undefined number", () => {
    expect(TypeIsExtensions.isNumberNull(null)).toBe(true);
    expect(TypeIsExtensions.isNumberNull(undefined)).toBe(true);
    expect(TypeIsExtensions.isNumberNull(0)).toBe(false);
  });
});

describe("isNumberNotNull Function Tests", () => {
  it("returns true for non-null or undefined number", () => {
    expect(TypeIsExtensions.isNumberNotNull(null)).toBe(false);
    expect(TypeIsExtensions.isNumberNotNull(undefined)).toBe(false);
    expect(TypeIsExtensions.isNumberNotNull(-1)).toBe(true);
    expect(TypeIsExtensions.isNumberNotNull(0)).toBe(true);
    expect(TypeIsExtensions.isNumberNotNull(42)).toBe(true);
  });
});

describe("isArrayNull Function Tests", () => {
  it("returns true for null or undefined array", () => {
    expect(TypeIsExtensions.isArrayNull(null)).toBe(true);
    expect(TypeIsExtensions.isArrayNull(undefined)).toBe(true);
    expect(TypeIsExtensions.isArrayNull([])).toBe(true);
  });
});

describe("isArrayNotNull Function Tests", () => {
  it("returns true for non-null or undefined array", () => {
    expect(TypeIsExtensions.isArrayNotNull([])).toBe(false);
    expect(TypeIsExtensions.isArrayNotNull(null)).toBe(false);
    expect(TypeIsExtensions.isArrayNotNull(undefined)).toBe(false);
    expect(TypeIsExtensions.isArrayNotNull([1, 2, 3])).toBe(true);
  });
});

describe("isBooleanNull Function Tests", () => {
  it("returns true for null or undefined boolean", () => {
    expect(TypeIsExtensions.isBooleanNull(null)).toBe(true);
    expect(TypeIsExtensions.isBooleanNull(undefined)).toBe(true);
    expect(TypeIsExtensions.isBooleanNull(false)).toBe(false);
  });
});

describe("isBooleanNotNull Function Tests", () => {
  it("returns true for non-null or undefined boolean", () => {
    expect(TypeIsExtensions.isBooleanNotNull(null)).toBe(false);
    expect(TypeIsExtensions.isBooleanNotNull(undefined)).toBe(false);
    expect(TypeIsExtensions.isBooleanNotNull(false)).toBe(true);
    expect(TypeIsExtensions.isBooleanNotNull(true)).toBe(true);
  });
});
