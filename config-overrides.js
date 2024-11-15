const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@api': path.resolve(__dirname, 'src/api/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@router': path.resolve(__dirname, 'src/router/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@svg': path.resolve(__dirname, 'src/assets/svg/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  };

  return config;
};
