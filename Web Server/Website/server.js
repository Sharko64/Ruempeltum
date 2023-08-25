const express = require('express')
const alerts = require('./data/alerts.json')
const events = require('./data/events.json')
const requestLogger = require('./middlewares/requestLogger')
const rateLimiting = require('./middlewares/rateLimiting')

const app = express()

app.set('view engine', 'ejs')

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
app.use(rateLimiting)

app.get('/', (req, res) => {
  res.render('index.ejs', { alerts: alerts })
})

app.get('/aktuell', (req, res) => {
  res.render('aktuell.ejs', { events: events })
})

app.get('/bald', (req, res) => {
  res.render('bald.ejs', { events: events })
})

app.get('/infos', (req, res) => {
  res.render('infos.ejs')
})


app.listen(3000, () => {
  console.log('\nListening on port 3000...')
})
