function toDateTime(value: string): Date | undefined {
  const result = new Date(value);

  return isNaN(result.getTime()) ? undefined : result;
}

function toNumber(value: string): number {
  const result = parseInt(value, 10);

  return isNaN(result) ? 0 : result;
}

function toDecimal(value: string): number {
  const result = parseFloat(value);

  return isNaN(result) ? 0.0 : result;
}

function toBoolean(value: string): boolean {
  return value.toLowerCase() === "true";
}

function toString(value: any): string {
  return value.toString();
}

const TypeConverterExtension = {
  toDateTime,
  toNumber,
  toDecimal,
  toBoolean,
  toString,
};

export default TypeConverterExtension;
