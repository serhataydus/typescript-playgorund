import TypeConverterExtension from "./TypeConverterExtension";

describe("toDateTime Function Tests", () => {
  test("toDateTime converts valid string to Date", () => {
    const validDateString = "2023-01-01T12:00:00.000Z";
    const result = TypeConverterExtension.toDateTime(validDateString);

    // Check if the result is a Date object
    expect(result).toBeInstanceOf(Date);
  });

  test("toDateTime converts valid string to Date", () => {
    const validDateString = "2023-01-01";
    const result = TypeConverterExtension.toDateTime(validDateString);

    // Check if the result is a Date object
    expect(result).toBeInstanceOf(Date);
  });

  test("toDateTime returns undefined for invalid string", () => {
    const invalidDateString = "invalidDate";
    const result = TypeConverterExtension.toDateTime(invalidDateString);

    // Check if the result is undefined
    expect(result).toBeUndefined();
  });
});

describe("toNumber Function Tests", () => {
  test("toNumber converts valid string to number", () => {
    const validNumberString = "42";
    const result = TypeConverterExtension.toNumber(validNumberString);

    // Check if the result is a number
    expect(result).toBe(42);
  });

  test("toNumber returns 0 for invalid string", () => {
    const invalidNumberString = "invalidNumber";
    const result = TypeConverterExtension.toNumber(invalidNumberString);

    // Check if the result is 0
    expect(result).toBe(0);
  });
});

describe("toDecimal Function Tests", () => {
  test("toDecimal converts valid string to decimal", () => {
    const validDecimalString = "3.14";
    const result = TypeConverterExtension.toDecimal(validDecimalString);

    // Check if the result is a decimal
    expect(result).toBe(3.14);
  });

  test("toDecimal returns 0.0 for invalid string", () => {
    const invalidDecimalString = "invalidDecimal";
    const result = TypeConverterExtension.toDecimal(invalidDecimalString);

    // Check if the result is 0.0
    expect(result).toBe(0.0);
  });
});

describe("toBoolean Function Tests", () => {
  test('toBoolean converts "true" string to true', () => {
    const trueString = "true";
    const result = TypeConverterExtension.toBoolean(trueString);

    // Check if the result is true
    expect(result).toBe(true);
  });

  test("toBoolean converts any other string to false", () => {
    const falseString = "false";
    const result = TypeConverterExtension.toBoolean(falseString);

    // Check if the result is false
    expect(result).toBe(false);
  });
});

describe("toString Function Tests", () => {
  test("toString converts any value to string", () => {
    const value = 42;
    const result = TypeConverterExtension.toString(value);

    // Check if the result is a string
    expect(result).toBe("42");
  });
});
