<script>
export default {
  data() {
    return {
      // Dato textInterpolation
      textInterpolation: 0,
      // Dato rawHTML
      rawHTML: `
        <FONT color="#faddad" size="5">
          <MARQUEE>Raw HTML</MARQUEE>
        </FONT>
      `
    }
  }
}
</script>

<template>
  <main>
    <img alt="Vue logo" class="logo" src="src\assets\logo.svg" width="150" height="150" />

    <div class="greetings">
      <h1 class="green">Vue.js - Sintaxis Básica</h1>
    </div>
    <br>

    <div class="greetings">
      <h1 class="green">Text Interpolation</h1>
    </div>
    <div id="textInterpolationSection">
      <p >
        La forma más básica de enlace de datos es la interpolación de texto
        utilizando la sintaxis "llaves dobles { }".
        La etiqueta se reemplazará con el valor de la propiedad "msg"
        de la instancia del componente correspondiente. También se actualizará
        cada vez que cambie la propiedad "msg".
      </p>
      <br>
      <h2>textInterpolation = {{ textInterpolation }} </h2>
      <br>
      <button @click="textInterpolation--">-</button>
      <button @click="textInterpolation++">+</button>
    </div>
    <br>
    <div class="greetings">
      <h1 class="green">Raw HTML</h1>
    </div>
    <div id="rawHtmlSection">
      <p>Para generar HTML real, debemos usar la directiva v-html.
      </p>
      <br>
      <h2>Directiva v-html</h2>
      <br>
      <span v-html="rawHTML"></span>
      <br>
      <h2>Notas de seguridad:</h2>
      <dl>
        <dd> <p>- Usar este método lo expone fácilmente a ataques XSS.</p> </dd>
        <dd> <p>- Solo use v-html en contenido confiable y nunca en contenido 
          proporcionado por el usuario.</p></dd>
      </dl>
    </div>
</main>
</template>

<style scoped>

.logo {
    margin: 0 2rem 0 0;
  }
.logo {
  display: block;
  margin: 0 auto 2rem;
}
p {
  color: silver;
  font-size: larger;
}

button {
  font-size: xx-large;
  cursor: pointer;
  padding: 7px 18px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.greetings h1 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1{
    text-align: left;
  }
}
</style>