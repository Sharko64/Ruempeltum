const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  message: 'Too many requests from this IP, please try again later.',
})

module.exports = limiter
