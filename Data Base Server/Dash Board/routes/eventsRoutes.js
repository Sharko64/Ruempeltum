const express = require('express')

const router = express.Router()

const months = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'
]

months.forEach((month) => {
  router.get(`/${month}`, (req, res) => {
    res.render(`months/${month}.ejs`)
  })
})

module.exports = router
