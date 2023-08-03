// loggerMiddleware.js

const logger = require("../helpers/logger");

const loggingMiddleware = (req, res, next) => {
  const { method, originalUrl } = req;

  logger.info(`Incoming request - ${method} ${originalUrl}`);

  next(); // Move to the next middleware or route handler
};

module.exports = loggingMiddleware;
