/**
 * El ejercicio constará de verificar un llamado
 * de la petición HTTP.
 * El middleware deberá ser capaz de identificar
 * que tipo de Verbo HTTP está ciendo usado en
 * ese llamado en especifico
 *
 */

const logger = (req, res, next) => {
  //Añadir el código aquí
  console.log('TCL: logger -> req.method', req.method)

  next() // esto es necesario para que la petición continúe
}

const express = require('express')
const app = express()

app.use(logger)
app.get('/', (req, res) => {
  res.send('GET request')
})
app.post('/', (req, res) => {
  res.send('POST request')
})

app.put('/', (req, res) => {
  res.send('PUT request')
})

app.delete('/', (req, res) => {
  res.send('DELETE request')
})

app.listen(9000, () => console.log('Listening on port 9000!'))
