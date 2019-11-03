import helmet from 'helmet'

const oneDayInSeconds = 60 * 60 * 24 // Seconds * Minutes * Hours

const securityHeaders = helmet({
  hsts: {
    maxAge: oneDayInSeconds * 365,
    includeSubDomains: true,
    preload: true,
  },
  referrerPolicy: {
    policy: 'same-origin',
  },
})

export default securityHeaders
