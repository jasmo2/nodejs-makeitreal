/**
 * Lo importante aquí a tener encuenta es la linea XXXX
 * porqué se le dice a Express que debe agregar el motor
 * de plantilla PUG.
 *
 * También la linea YYY donde nos dicen como llamar
 * a la plantilla y además de como pasarle
 * parametros(vairables).
 *
 * la carpeta `views/` debería estar en la raíz dado que el motor ls
 * busca aquí
 *
 * `yarn templates`
 */

const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.send('<h1>Hola desde Express</h1>')
})

app.get('/template', (req, res) => {
  res.render('template', { message: 'Hello there Pug template!' })
})

app.listen(9000, () => console.log('Listening on port 9000!'))

// Ahora un Ejercicio
// => ../Exercises/3-templates.js
