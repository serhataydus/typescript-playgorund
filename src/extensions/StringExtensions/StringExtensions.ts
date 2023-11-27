function toCamelCase(str: string): string {
  return !str || str.length <= 1 ? str : str[0].toLowerCase() + str.slice(1);
}

const StringExtensions = { toCamelCase };

export default StringExtensions;
