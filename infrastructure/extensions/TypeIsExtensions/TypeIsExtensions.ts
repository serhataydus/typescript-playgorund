import {
  EmailRegex,
  NumberRegex,
} from "../../constants/RegularExpressionConstants";
import { HtmlRegex } from "../../constants/RegularExpressionConstants";
import ConsoleLog from "../../utils/ConsoleLog/ConsoleLogUtil";

function isValidJson(text: string): boolean {
  text = text.trim();
  if (
    (text.startsWith("{") && text.endsWith("}")) ||
    (text.startsWith("[") && text.endsWith("]"))
  ) {
    try {
      JSON.parse(text);
      return true;
    } catch (error) {
      ConsoleLog.ConsoleLogError(error, "isValidJson");
      return false;
    }
  } else {
    return false;
  }
}

function isHtml(text: string): boolean {
  return HtmlRegex.test(text);
}

function isNumber(value: string): boolean {
  return NumberRegex.test(value);
}

function isBoolean(value: string): boolean {
  return value.toLowerCase() === "true" || value.toLowerCase() === "false";
}

function isEmailAddress(value: string): boolean {
  return EmailRegex.test(value);
}

function isObjectNull(value: object | undefined | null) {
  if (value === undefined || value === null) {
    return true;
  } else {
    return false;
  }
}

function isObjectNotNull(value: object | undefined | null) {
  return !isObjectNull(value);
}

function isStringNull(value: string | undefined | null) {
  if (value === undefined || value === null || value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function isStringNotNull(value: string | undefined | null) {
  return !isStringNull(value);
}

function isStringNullOrWhiteSpace(value: string | undefined | null) {
  if (value === undefined || value === null || value.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}

function isStringNotNullOrWhiteSpace(value: string | undefined | null) {
  return !isStringNullOrWhiteSpace(value);
}

function isNumberNull(value: number | undefined | null) {
  if (value === undefined || value === null) {
    return true;
  } else {
    return false;
  }
}

function isNumberNotNull(value: number | undefined | null) {
  return !isNumberNull(value);
}

function isArrayNull(value: any[] | undefined | null) {
  if (value === undefined || value === null || value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function isArrayNotNull(value: any[] | undefined | null) {
  return !isArrayNull(value);
}

function isBooleanNull(value: boolean | undefined | null) {
  if (value === undefined || value === null) {
    return true;
  } else {
    return false;
  }
}

function isBooleanNotNull(value: boolean | undefined | null) {
  return !isBooleanNull(value);
}

const TypeIsExtensions = {
  isValidJson,
  isHtml,
  isBoolean,
  isNumber,
  isEmailAddress,
  isObjectNull,
  isObjectNotNull,
  isStringNull,
  isStringNotNull,
  isNumberNull,
  isNumberNotNull,
  isArrayNull,
  isArrayNotNull,
  isBooleanNull,
  isBooleanNotNull,
  isStringNullOrWhiteSpace,
  isStringNotNullOrWhiteSpace,
};

export default TypeIsExtensions;
