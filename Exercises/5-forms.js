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

app.use(express.urlencoded())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('formII')
})

app.post('/formsubmit', (req, res) => {
  console.log('TCL: req', req.body)

  // Hacer un redirect con la bandera "sent"
  res.render('formII', { sent: true })
})

app.listen(9000, () => console.log('Listening on port 9000!'))
