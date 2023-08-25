const requestLogger = (req, res, next) => {
  // console.log(`${req.method} ${req.url} - ${new Date()}`)
  console.log(`Request: ${req.method} ${req.url}`)
  console.log('Headers:', req.headers)
  console.log('Query Parameters:', req.query)
  console.log('Request Body:', req.body)
  console.log('Timestamp:', new Date())
  console.log('')
  next()
}

module.exports = requestLogger
