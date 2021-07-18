const express = require('express')
const bodyParser = require('body-parser')
const rp = require('request-promise')
const cheerio = require('cheerio')
const app = express()

app.get('/v1/scrape', bodyParser.urlencoded(), (req, res) => {
  rp(req.body.url).then((html) => {
    const $ = cheerio.load(html)
    const bodyHtml = $('body').html()
    res.status(200).send(bodyHtml)
  })
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})
