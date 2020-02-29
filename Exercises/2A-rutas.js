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

app.get("/", (req, res) => {
    res.send("<h1>Estoy en get root</h1>")
})

app.get("/custom", (req, res) => {
    res.send("<h1>Estoy en get custom</h1>")
})

let cuatroVeinte = 'a'


app.put("/custom/:id/:name/:pc", (req, res) => {
    const {id, name, pc} = req.params
    res.send(`hola esto es put con id: ${id} nombre: ${name} pc: ${pc}`)
})

app.post("/custom", (req, res) => {
    res.send("Esto es post")
})

app.delete("/custom/:id", (req, res) => {
    res.send("Esto es delete")
})

app.use((req, res, next) => {
    res.status(404);
    res.send('404: File Not Found Rogger II');
});

app.listen(9000, () => console.log('Listening on port 9000!'))
