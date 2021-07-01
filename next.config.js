/* eslint-disable @typescript-eslint/no-var-requires */

const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/checkout',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};
