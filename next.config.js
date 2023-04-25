module.exports = {
  trailingSlash: true,
  serverRuntimeConfig: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  publicRuntimeConfig: {
    // To expose the config to the browser
    // SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  async redirects() {
    return [
      {
        source: '/bootcamp-7',
        destination: '/bootcamp',
        permanent: true,
      },
      {
        source: '/mentorship-2023',
        destination: '/mentorship',
        permanent: true,
      },
    ]
  },
}
