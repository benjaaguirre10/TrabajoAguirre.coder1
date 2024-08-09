import winston from "winston";
import config from "../config.js";

const ENV = config.ENV;

const logConfig = {
  level: ENV === 'prod' ? 'info' : 'debug',
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    http: 4,
    debug: 5,
  },
  transports: [
    new winston.transports.Console({ level: 'debug' }),
    new winston.transports.File({
      filename: './logs/logger.log',
      level: 'warn',
    }),
  ],
};

const logger = winston.createLogger(logConfig);

export default logger;
