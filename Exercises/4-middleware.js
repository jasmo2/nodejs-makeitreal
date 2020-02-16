/**
 * El ejercicio constará de verificar un llamado
 * de la petición HTTP.
 * El middleware deberá ser capaz de identificar
 * que tipo de Verbo HTTP está ciendo usado en
 * ese llamado en especifico
 *
 * `yarn ex:middleware`
 */

const logger = (req, res, next) => {
  //Añadir el código aquí

  next() // esto es necesario para que la petición continúe
}

const express = require('express')
const app = express()

app.use(logger)

app.listen(9000, () => console.log('Listening on port 9000!'))
