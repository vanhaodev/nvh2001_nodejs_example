const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 2001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .get('/p2', (req, res) => res.render('index2'))
  .listen(PORT, '127.0.0.1')
  console.log('Port là 2001 nhá');
