<template>
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
</template>

<script>
export default {
  data() {
    return {
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

<style scoped>
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