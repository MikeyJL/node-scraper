const express = require('express')
const bodyParser = require('body-parser')
const rp = require('request-promise')
const cheerio = require('cheerio')
const app = express()

app.get('/v1/scrape', bodyParser.urlencoded(), (req, res) => {
  rp(req.body.url).then((html) => {
    const $ = cheerio.load(html)
    const result = () => {
      switch (req.body.returnType) {
        case 'html':
          return $(req.body.target.toString()).html()
        case 'text':
          return $(req.body.target.toString()).text()
        case 'list-html': {
          const list = []
          $(req.body.select).each((index, element) => {
            list.push($(element).html())
          })
          return list
        }
        case 'list-text': {
          const list = []
          $(req.body.select).each((index, element) => {
            list.push($(element).text())
          })
          return list
        }
      }
    }
    res.status(200).send(result())
  })
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})
