module.exports = ({ env }) => ({
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 300,
    apolloServer: {
      tracing: false,
    },
  },
  sentry: {
    dsn: null //env('NODE_ENV') === 'development' ? null : env('SENTRY_DSN'),
    /*dsn: env('SENTRY_DSN'),
    sendMetadata: true,*/
  },
  // ...
});
24OreBsD3v!$!
