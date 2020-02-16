/**
 * El middleware logger cogerá cada petición y
 * la imprimirá sin importar que pase
 *
 * Es importante situar el middleware al inicio
 * para que pueda estar atento a los llamados
 * HTTP.
 */

const logger = (req, res, next) => {
  console.log('Nueva petición HTTP')
  next() // esto es necesario para que la petición continúe
}

const express = require('express')
const app = express()

app.use(logger)
app.get('/', (req, res) => {
  res.send('<h1>Pagina Root Si existe</h1>')
})
app.post('/', (req, res) => {
  res.send('post request')
})
app.put('/', (req, res) => {
  res.send('put request')
})
app.delete('/', (req, res) => {
  res.send('delete request')
})

app.listen(9000, () => console.log('Listening on port 9000!'))
