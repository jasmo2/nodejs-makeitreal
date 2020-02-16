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

app.use(function(req, res) {
  res.status(404)
  res.send(`
  <body style='
    align-items: center;
    display: flex; 
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  '>
   
    <h1 style='text-align:center;'>Esta pagina no existe</h1>
    <h2 style='text-align:center;'> 404 </h2>
   </body>`)
})

app.listen(9000, () => console.log('Listening on port 9000!'))
