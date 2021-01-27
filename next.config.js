const withCSS = require('@zeit/next-css');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withCSS({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
  assetPrefix: !debug ? '' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  },
});

module.exports = {
  poweredByHeader: false,
  generateEtags: false,
}