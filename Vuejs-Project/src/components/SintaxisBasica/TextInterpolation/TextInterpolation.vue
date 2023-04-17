<script>
export default {
  data() {
    return {
      // Dato textInterpolation
      textInterpolation: 0
    }
  }
}
</script>

<template>
  <main>
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
</main>
</template>

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