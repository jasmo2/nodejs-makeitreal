/**
 * Rutas se espera armar un mensaje 404 para cuando las
 * rutas NO existan.
 * -- 404 es conocido en los códigos porqué significa que
 * -- NO existe en nuestro programa-web
 *
 * Crear los siguientes Tags que contengan la respuesta
 * <body>, <h1> no existe </h1>, <h2> 404 </h2>
 *
 * Para ejecutar su programa desde consola usar
 * `yarn ex:routes`
 *
 */

const express = require('express')
const app = express()

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
