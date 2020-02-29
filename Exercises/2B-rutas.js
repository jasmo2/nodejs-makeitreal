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

app.use((req, res) => {
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
    </body>
   `)
})

app.listen(9000, () => console.log('Listening on port 9000!'))
