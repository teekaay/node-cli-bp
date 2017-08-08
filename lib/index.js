const logger = require('winston');

function doStuff(opts) {
  logger.info('Doing stuff');
  logger.info('Completing stuff');
}

module.exports = {
  doStuff,
};
