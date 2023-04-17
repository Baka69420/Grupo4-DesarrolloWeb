<template>
    <h1>Directives</h1>
    <h2>Descripcion:</h2>
    <p>Las directivas es una de las cosas mas importantes de Vue.js, ya que esta es la que ayuda a hacer las paginas mas responsivas y al mismo tiempo facilita la manera de como se trabajan en ellas.<br></p>
    <h2>Ejemplo:</h2>
    <p>Existen varias directivas, las cuales se colocan como atributos en el codigo HTML, estas se identifican porque empiezan con "v-".</p>
    <p>Se puede hacer un <router-link :to="{name: 'text-interpolation'}">Text Interpolation</router-link> sin el uso de doble llaves (conocido como curly interpolation) usando la directiva "v-text".</p>
    <p>En <router-link :to="{name: 'raw-html'}">Raw HTML</router-link> se hizo uso de la directiva "v-html".</p>
    <p>En <router-link :to="{name: 'list-rendering'}">List Rendering</router-link> podemos ver un ejemplo del uso de "v-for" que es una directa para recorrer listas.</p>
    <p>Y en <router-link :to="{name: 'conditional-rendering'}">Conditional Rendering</router-link> podemos ver un ejemplo del uso de las directicas "v-if", "v-else" y "v-else-if".</p>
    <p>En este ejemplo se hizo uso de la directiva "v-show", que hace casi lo mismo que "v-if", solo que son diferentes ya que "v-show" hace el cambio al display del objeto, mientras que "v-if" destruye y reconstruye el objeto a como sea necesario.</p>
    <div id="ejemplo">
        <h2>Visualizador de imagen</h2>
        <img v-show="verImagen" src="@/assets/images/cat.jpeg" alt="foto de gato">
        <p></p>
        <button v-on:click="cambiarVisualizacion()" v-text="buttonName"></button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "Ocultar",
      verImagen: true,
    };
  },
  methods: {
    cambiarVisualizacion() {
        if(this.verImagen){
            this.buttonName = "Mostrar";
            this.verImagen = false;
        } else {
            this.buttonName = "Ocultar";
            this.verImagen = true;
        }
    }
  }
}
</script>

<style scoped>
h1 {
    text-align: center;
}

#ejemplo {
    text-align: center;
    padding: 5px;
    border: 1px solid black;
}

#ejemplo img {
    border: 3px black solid;
    border-radius: 20px;
    width: 30%;
    height: auto;
}

#ejemplo button {
    background-color: lightgray;
    color: black;
    padding: 10px;
    border-radius: 10px;
}

#caja {
    height: 200px;
    width: 200px;
    margin: 0 auto;
    background-color: blueviolet;
    border-radius: 10px;
    border: 2px solid black;
}
</style>