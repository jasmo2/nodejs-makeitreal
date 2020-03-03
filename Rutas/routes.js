const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hola desde Express</h1>')
})

app.get('/ruta1', (req, res) => {
  res.send('<h1>Estas en Ruta 1</h1>')
})

app.get('/ruta2', (req, res) => {
  res.send('<h1>Estas en Ruta II</h1>')
})

// Esto es una ruta donde se actualizará usuarios posteriormente
app.put('/put/:id', (req, res) => {
  const { id } = req.params
  console.log('TCL: req', id)
  res.send(`Recibimos un PUT a /user con ID ${id}`)
})

app.post('/post', (req, res) => {
  console.log('TCL: req', req)

  res.send(`Recibimos un POST `)
})

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  console.log('TCL: req', id)
  res.send(`Recibimos un DELETE a /user con ID ${id}`)
})

app.listen(9000, () => console.log('Listening on port 9000!'))

// Ahora un Ejercicio
// => ../Exercises/2-rutas.js
