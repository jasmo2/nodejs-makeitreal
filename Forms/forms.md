# Formularios

Mediante formularios podemos interactuar con los usuarios pidiendoles información
relavante para nuestra aplicación.

Un ejemplo de un formulario simple.

```
<form action="/hello" method="post">
  <label for="name"><input type="text" id="name" name="name">
  <button type="submit">Enviar</button>
</form>
```

### A tener encuenta.

Los formularios se componen de varias partes:

- **action**: dice a donde será enviada la URL.
- **method** puede ser `get` o `post`
- **submit** normalmente botón que inicia la acción de envio de información.

## Campos de los formularios

#### Tipo texto

Campo donde se puede escribir texto.

`<input type="text" id="name" name="name">`

#### Tipo contraseña

No muestra caracteres a la hora de digitar sobre el.

`<input type="password" name="password">`

#### Tipo Area

La diferencia con el campo texto; es que es multilinea.

`<textarea name="message" rows="10">Acá va el texto inicial</textarea>`

#### Tipo Lista

Es un menú desplegable donde se puede selecionar un sola opción de la lista.

```
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

#### Tipo radio-button

El tipo radio button escogerá uno de los valores que esté selecionado.
Lo que recibe el servidor es lo que está en el attributo `value`.

###### `value='val'`

```
<input type="radio" name="gender" value="male" checked> Male<br>
<input type="radio" name="gender" value="female"> Female<br>
<input type="radio" name="gender" value="other"> Other
```

#### Tipo checkbox

Campo selecionable:

`<input type="checkbox" name="terms" value="accep"> Acepto los términos y condiciones`

## Manos a la acción

##### [Forms.js](./forms.js)
