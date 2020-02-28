/**
 * Para este ejercicio escribamos 5 rutas
 * - get que reciba en la raíz (/)
 * - get que reciba en (/custom)
 * - put que reciba en (/custom)
 * - post que reciba en (/custom)
 * - delete que reciba en (/custom)
 *
 *  Cada una de estas rutas deberá imprimir que tipo de metodo es.
 *
 * Para hacer las pruebas deberán tener Posman instalado.
 * https://www.postman.com/
 *
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Index Page')
})

app.get('/custom/', (req, res) => {
  res.send('Get Page')
})

app.get('/custom/:userId/:name/', (req, res) => {
  const { userId, name } = req.params
  res.send(`Get Page II id: ${userId} name: ${name}`)
})

app.put('/custom/:userId', (req, res) => {
  const { userId } = req.params
  console.log('TCL: userId', userId)
  res.send(`Put Page ${userId}`)
})
app.delete('/custom/:userId', (req, res) => {
  const { userId } = req.params

  console.log('TCL: userId', userId)
  res.send(`Delete Page ${userId}`)
})
app.post('/custom', (req, res) => {
  res.send('Post Page')
})

app.listen(9000, () => console.log('Listening on port 9000!'))
