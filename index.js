const express = require('express')
const app = express()

const port = 18418 // redirect > rdrct > rdr < 18418
const host = '0.0.0.0'

app.use(function (req, res, next) {
  const host = req.get('host')
  const origin = req.get('origin')
  console.log('host:', host)
  console.log('origin:', origin)

  const domain = req.get('origin') || req.get('host') || ''
  if (domain === '' || domain === 'localhost' || domain.startsWith('localhost:')) {
    res.status(404).send('<h1>localhost<h1>')
    return
  }

  res.status(404).send('<h1>redirect<h1>')
})

// app.get('/', (req, res) => {
//   res.status(200).type('html').send('<h1>Hello World!<h1>')
// })

app.listen(port, host, () => {
  console.info(`Express app listening at http://${host}:${port}`)
})
