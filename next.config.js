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
      { source: '/bootcamp', destination: '/', permanent: true },
      { source: '/bootcamp-7', destination: '/', permanent: true },
      { source: '/bootcamp-3', destination: '/', permanent: true },
      { source: '/bootcamp-6', destination: '/', permanent: true },
      { source: '/bootcamp_back', destination: '/', permanent: true },
      { source: '/mentorship-2021', destination: '/mentorship', permanent: true },
      { source: '/mentorship-2022', destination: '/mentorship', permanent: true },
      { source: '/mentorship-2023', destination: '/mentorship', permanent: true },
    ]
  },
}
