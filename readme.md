# NodeJs

### ¿Qué es **_NodeJS_**?

#### Es el mismo motor de V8 (el motor-JS de Chrome) y puesto en el backend.

##### Antes de comenzar corramos los siguientes comandos para syncronizar las versiones de Node he instalar Yarn(manejador de paquetes de Facebook)

Versión **LTS**  
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Luego de ternal instalado

```
npm install yarn --global

mkdir NodeJS
cd NodeJS
npm init
git init
touch .gitignore
yarn add express
yarn add nodemon

yarn install
```

###### En su `.gitignore` poner lo siguiente:

```
node_modules/
```

### Ahora si listos para la acción.

---

# NodeJS

# Primeros pasos

Inicialmente pondremos a trabajar nuestro node de forma que muestre el puerto y además algo en el explorador!

#### Un pequeño ejercicio

###### Para corer los ejercicios usar los siguiente comando:

`yarn run nodemon ./Exercises/1-initial.js`

[./Exercises/1-initial.js](./Exercises/1-initial.js)

## Http Protocol

#### [HTTP-Protocol.md](./HTTP-Protocol/http.md)

###### #ContinuaHTTP

## Rutas

Las rutas como vimos, abstracciones como el uso de los verbos HTTP.

#### [Rutas](./Rutas/routes.js)

## Vistas

#### [Vistas.md](./Vistas/vistas.md)

## Middleware

#### [Middleware.md](./Middleware/middleware.md)

## Formularios

#### [Forms.md](./Forms/forms.md)
