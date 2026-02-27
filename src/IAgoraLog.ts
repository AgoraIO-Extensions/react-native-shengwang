import './extension/IAgoraLogExtension';

/**
 * @ignore
 */
export enum LogLevel {
  /**
   * @ignore
   */
  LogLevelNone = 0x0000,
  /**
   * @ignore
   */
  LogLevelInfo = 0x0001,
  /**
   * @ignore
   */
  LogLevelWarn = 0x0002,
  /**
   * @ignore
   */
  LogLevelError = 0x0004,
  /**
   * @ignore
   */
  LogLevelFatal = 0x0008,
  /**
   * @ignore
   */
  LogLevelApiCall = 0x0010,
  /**
   * @ignore
   */
  LogLevelDebug = 0x0020,
}

/**
 * @ignore
 */
export enum LogFilterType {
  /**
   * @ignore
   */
  LogFilterOff = 0,
  /**
   * @ignore
   */
  LogFilterDebug = 0x080f,
  /**
   * @ignore
   */
  LogFilterInfo = 0x000f,
  /**
   * @ignore
   */
  LogFilterWarn = 0x000e,
  /**
   * @ignore
   */
  LogFilterError = 0x000c,
  /**
   * @ignore
   */
  LogFilterCritical = 0x0008,
  /**
   * @ignore
   */
  LogFilterMask = 0x80f,
}

/**
 * @ignore
 */
export class LogConfig {
  /**
   * @ignore
   */
  filePath?: string;
  /**
   * @ignore
   */
  fileSizeInKB?: number;
  /**
   * @ignore
   */
  level?: LogLevel;
}
