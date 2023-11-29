
import pino from 'pino';

const config = {
  level: process.env.LOG_LEVEL || 'info',
};

export const locallogger = pino(config);

