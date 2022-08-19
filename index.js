const express = require('express')
const app = express()

const port = 18418 // redirect > rdrct > rdr < 18418
const host = '0.0.0.0'

app.use(function (req, res, next) {
  const host = req.get('host') || ''
  if (
    host === 'queer.events' || host.endsWith('.queer.events') ||
    host === 'queer.domains' || host.endsWith('.queer.domains') ||
    host === 'queer.tips' || host.endsWith('.queer.tips') ||
    host === 'queer.how' || host.endsWith('.queer.how') ||
    host === 'queermap.lgbt' || host.endsWith('.queermap.lgbt') ||
    host === 'news-bonn.de' || host.endsWith('.news-bonn.de') ||
    host === 'news.qiekub.org' || host.endsWith('.news.qiekub.org')
  ) {
    res.redirect(307, 'https://map.qiekub.org')
    return
  } else if (
    host.endsWith('.thomasrosen.me') ||
    host === 'thomasrosen.xyz' || host.endsWith('.thomasrosen.xyz') ||
    host === 'thomasrosen.qiekub.org' || host.endsWith('.thomasrosen.qiekub.org') ||
    host === 'thomasrosen.qiekub.com' || host.endsWith('.thomasrosen.qiekub.com')
  ) {
    res.redirect(307, 'https://thomasrosen.me')
    return
  }

  res.status(200).send('Contact <a href="thomas.rosen@qiekub.org">Thomas Rosen</a> for more information.')
})

// app.get('/', (req, res) => {
//   res.status(200).type('html').send('<h1>Hello World!<h1>')
// })

app.listen(port, host, () => {
  console.info(`Express app listening at http://${host}:${port}`)
})
