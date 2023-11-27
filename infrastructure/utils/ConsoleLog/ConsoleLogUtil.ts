import { Development } from "../../constants/EnvironmentConstants";

function ConsoleLogInfo(info: any, description: string) {
  if (process.env.NODE_ENV === Development) {
    console.log(info, description);
  }
}

function ConsoleLogError(error: any, description: string) {
  if (process.env.NODE_ENV === Development) {
    console.error(error, description);
  } else {
    // TODO Logla
  }
}

const ConsoleLog = { ConsoleLogInfo, ConsoleLogError };

export default ConsoleLog;
