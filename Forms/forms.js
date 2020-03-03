/**
 * Forms
 * Para este ejercicio necesitos usar HTML. Y usaremos el
 * motor de plantillas PUG.
 *
 * Una vez se haga "submit" del formulario este imprimirá
 * el valor con el que viene.
 *
 * El siguiente recurso es una ayuda para converitr html a pug
 * https://html-to-pug.com/
 *
 * `yarn forms`
 */

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// app.use(express.urlencoded())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('form')
})

app.post('/formsubmit', (req, res) => {
  console.log('TCL: req', req.body)

  res.render('form', { sent: true })
})

app.listen(9000, () => console.log('Listening on port 9000!'))
