const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: { '@pages': path.resolve(__dirname, 'src/pages/') },
  };

  return config;
};
