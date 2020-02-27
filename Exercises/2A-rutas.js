/**
 * Para este ejercicio escribamos 5 rutas
 * - get que reciba en la raíz (root)
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

app.listen(9000, () => console.log('Listening on port 9000!'))
