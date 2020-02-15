const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hola desde Express</h1>')
})

app.listen(9000, () => console.log('Listening on port 9000!'))
