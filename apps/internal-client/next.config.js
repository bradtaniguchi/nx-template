// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
const { withSentryConfig } = require('@sentry/nextjs');
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 */
module.exports = {
  ...withNx(
    withSentryConfig(nextConfig, {
      // Additional config options for the Sentry Webpack plugin. Keep in mind that
      // the following options are set automatically, and overriding them is not
      // recommended:
      //   release, url, org, project, authToken, configFile, stripPrefix,
      //   urlPrefix, include, ignore

      silent: true, // Suppresses all logs
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options.
    })
  ),
  // Needs to be overwritten here, as either withNx or withSentryConfig overwrites it.
  assetPrefix: isProd ? '/nx-template' : '',
};
