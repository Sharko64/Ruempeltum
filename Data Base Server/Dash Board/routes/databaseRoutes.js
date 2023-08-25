const express = require('express')
const alerts = require('../data/alerts.json')
const events = require('../data/events.json')
const infos = require('../data/infos.json')

const router = express.Router()

router.get('/events', (req, res) => {
  res.render('events.ejs', { events: events })
})

router.get('/infos', (req, res) => {
  res.render('infos.ejs', { alerts: alerts, infos: infos })
})

module.exports = router
