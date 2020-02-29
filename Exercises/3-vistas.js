/**
 *
 *  El ejercicio constará de 3 cosas.
 *  1º crear otra ruta `user-template` con un template que reciba
 *  nombre como argumento.
 *
 *  2º crear un partial/pieDePagina con sus tags html
 *
 * 3º Adicionar el header existente en partials
 *
 *
 * `yarn ex:templates`
 */

const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {})

app.get('/user-template/:nombre', (req, res) => {
  const { nombre } = req.params
  res.render('template', { name: nombre })
})

app.listen(9000, () => console.log('Listening on port 9000!'))
