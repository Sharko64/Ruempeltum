const express = require('express')

const databaseRouter = require('./routes/databaseRoutes')
const eventsRouter = require('./routes/eventsRoutes')

const requestLogger = require('./middlewares/requestLogger')
const rateLimiting = require('./middlewares/rateLimiting')
const login = require('./middlewares/login')

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const options = {
  dotfiles: 'allow',
  etag: false,
  extensions: ['css', 'ico'],
  fallthrough: true,
  immutable: true,
  index: false,
  lastModified: false,
  maxAge: '2h',
  redirect: false,
  setHeaders (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))
app.use(requestLogger)
// app.use(rateLimiting)

app.get('/', (req, res) => {
  res.render('index.ejs')
})

const user = {
  "username": "admin",
  "password": "test"
}

app.post('/', (req, res) => {
  const { username, password } = req.body
  if (username !== user.username) {
    return res.redirect('/')
  }
  if (password !== user.password) {
    return res.redirect('/')
  }
  res.redirect('/database')
})

app.get('/dash-board', (req, res) => {
  res.render('dash-board.ejs')
})

app.use('/dash-board', databaseRouter)
app.use('/dash-board/events', eventsRouter)

app.listen(4000, () => {
  console.log('\nListening on port 4000...')
})
