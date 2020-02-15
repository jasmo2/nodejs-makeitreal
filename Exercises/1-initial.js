/**
 * Para correrlo desde console usemos el comando
 * `yarn run ./Exercises/1-initial.js`
 *
 * Generemos un String que contenga un H2 y
 * nuestro nombre diciendo
 * hola var-NOMBRE
 */
const express = require('express')
const app = express()
const nombre = 'jasmo2'
const template = `<h2>Hola ${nombre}</h2>`
app.get('/', (req, res) => {
  res.send(template)
})

app.listen(9000, () => console.log('Listening on port 9000!'))
