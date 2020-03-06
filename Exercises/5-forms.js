/**
 * Forms
 * Para este ejecicio vamos a usar la vista.
 * `/views/formsII.pug`
 * la modificaremos y añadiremos un campo tipo
 * contraseña
 *
 * En el servidor lo imprimiremos y validaremos
 * si que los campos tengo un valor. En caso contrario
 * devolveremos un `res.send(400)`. Lo cual dará a
 * entender que algó mal sucedió en el request.
 *
 * `yarn ex:forms`
 */

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const url = require('url')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  if (req.query) {
    if (req.query.pw === '0') {
      res.render('formII', { invalid: true })
    } else {
      res.render('formII')
    }
  } else {
    res.render('formII')
  }
})

app.post('/formsubmit', (req, res) => {
  console.log('TCL: req', req.body)

  // Deconstruyendo el password que viene dentro del body
  const { password } = req.body

  // Revisar si password viene vacio
  if (!password) {
    res.redirect(
      303,
      url.format({
        pathname: '/',
        query: {
          pw: 0
        }
      })
    )
  } else {
    res.render('formII', { sent: true })
  }
  // Hacer un redirect con la bandera "sent"
})

app.listen(9000, () => console.log('Listening on port 9000!'))
