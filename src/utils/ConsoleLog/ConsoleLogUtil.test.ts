import {
  Development,
  Localhost,
  Production,
  Stage,
  Test,
} from "../../constants/EnvironmentConstants";
import ConsoleLog from "./ConsoleLogUtil";

describe("ConsoleLog Info Tests", () => {
  it("ConsoleLogInfo logs information in Development environment", () => {
    // Mock console.log
    const info = "Sample info";
    const description = "Sample description";
    process.env = { NODE_ENV: Development };
    console.log = jest.fn();

    // Call the function
    ConsoleLog.ConsoleLogInfo(info, description);

    // Check if console.log was called with the correct arguments
    expect(console.log).toHaveBeenCalledWith(info, description);
  });

  it("ConsoleLogInfo does not log info in non-Development environment", () => {
    // Mock console.error
    const info = "Sample info";
    const description = "Sample description";
    process.env = { NODE_ENV: Production };
    console.log = jest.fn();

    // Call the function
    ConsoleLog.ConsoleLogError(info, description);

    // Check if console.log was called with the correct arguments
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe("ConsoleLog Error Tests", () => {
  it("ConsoleLogError logs error in Development environment", () => {
    // Mock console.error
    const error = "Sample error";
    const description = "Sample description";
    process.env = { NODE_ENV: Development };
    console.error = jest.fn();

    // Call the function
    ConsoleLog.ConsoleLogError(error, description);

    // Check if console.error was called with the correct arguments
    expect(console.error).toHaveBeenCalledWith(error, description);
  });

  it("ConsoleLogError does not log error in production environment", () => {
    // Mock console.error
    const error = "Sample error";
    const description = "Sample description";
    process.env = { NODE_ENV: Production };
    console.error = jest.fn();

    // Call the function
    ConsoleLog.ConsoleLogError(error, description);

    // Check if console.error was called with the correct arguments
    expect(console.error).not.toHaveBeenCalled();
  });

  it("ConsoleLogError does not log error in test environment", () => {
    // Mock console.error
    const error = "Sample error";
    const description = "Sample description";
    process.env = { NODE_ENV: Test };
    console.error = jest.fn();

    // Call the function
    ConsoleLog.ConsoleLogError(error, description);

    // Check if console.error was called with the correct arguments
    expect(console.error).not.toHaveBeenCalled();
  });

  it("ConsoleLogError does not log error in stage environment", () => {
    // Mock console.error
    const error = "Sample error";
    const description = "Sample description";
    process.env = { NODE_ENV: Stage };
    console.error = jest.fn();

    // Call the function
    ConsoleLog.ConsoleLogError(error, description);

    // Check if console.error was called with the correct arguments
    expect(console.error).not.toHaveBeenCalled();
  });

  it("ConsoleLogError does not log error in localhost environment", () => {
    // Mock console.error
    const error = "Sample error";
    const description = "Sample description";
    process.env = { NODE_ENV: Localhost };
    console.error = jest.fn();

    // Call the function
    ConsoleLog.ConsoleLogError(error, description);

    // Check if console.error was called with the correct arguments
    expect(console.error).not.toHaveBeenCalled();
  });
});
