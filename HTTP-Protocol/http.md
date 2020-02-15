# Http Protocol

## HyperText Transfer Protocol

Aunque **NO** es el único protocolo, si es el más usado eh importante para la web.

Este protocolo define reglas que los creadores de navegadores y servidores web deben seguir
para poder estandarisar las respuestas y preguntas desde ambos sentidos

[https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tektutorialshub.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHTTP-Protocol.png&f=1&nofb=1](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tektutorialshub.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHTTP-Protocol.png&f=1&nofb=1)

Y para contextulizarlos mucho más la imagén anterior el navegador realiza los siguientes pasos al momento de comunicarse con el servidor.

1. Abre connexión con el servidor.
2. Envia un mensaje HTTP; petición al servidor.
3. Servidor responde de acuerdo lo que le haya preguntado el navegador.
4. Se cierra la conexión por parte del navegador.

### Verbos

#### Pregunta: ¿Qué significa cada verbo HTTP?

- GET
- POST
- PUT / PATCH
- DELETE

R: [Respuesta - verbos HTTP](./verbs)

### ¿Y Como responde el servidor?

[MDN códigos](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)

### Codigos de Respuesta

- 1XX: Información
- 2XX: Éxito
- 3XX: Redirección
- 4XX: Error en el cliente
- 5XX: Error en el servidor

##### Ejemplo en Postman

### Headers

Los encabezados brindan información adicional sobre la petición o la respuesta.
Los encabezados tienen la siguiente sintaxis:
`[nombre-del-encabezado]: [valor-del-encabezado]`

##### Ejemplo Postman

### URL

#### Uniform Resource Locator

Comúnmente es usada para pedir las paginas en nuestro navegador, aunque también mediante ellas se pueden pedir recursos adicionales como _Imagenes, Video, Audio, Archivos_ etc.

###### Composición de la URL

`http://localhost:80/ruta/al/archivo#fragmento?valor=querystring`

- **http** : Esquema, este puede ser _https_ ó _http_
- **localhost**: Host, nombre del dominio donde está la información
- **:80**: Puerto donde se escha los llamados. _Por defecto es 80_ si no se define
- **/ruta/al/archivo**: Como su nombre lo indica Ruta a donde queremos pedir el recurso.
- **#fragmento**: Referencia interna al DOM - documento.
- **?valor=querystring**: Se define como `?atributo=valor`. Como su nombre lo indica son preguntas adicionales que se hacen por URL al servidor.

#### Nuevamente volamos a la parte de NodeJS-Express para ver como se usa este protocolo con el servidor Web que vamos a hacer

[NodeJS](../nodejs.md#ContinuaHTTP)
