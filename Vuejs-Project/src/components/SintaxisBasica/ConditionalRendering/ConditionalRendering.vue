<template>
    <h1>Conditional Rendering</h1>
    <h2>Descripcion:</h2>
    <p>El Conditional Rendering son directivas que son usadas para mostrar cierto contenido en la pantalla si se cumple una condicion.<br></p>
    <h2>Ejemplo:</h2>
    <p>En este caso se hara uso de "v-if" obtiene el mismo resultado a cambiar el display del elemento a none, pero con la diferencia que este destruye los elementos que no se estan visualizando.</p>
    <p>En este caso vamso a tener un <router-link :to="{name: 'form-input-bindings'}">Form Input Binding</router-link> para mostrar una imagen si se escribe "gato" o "perro", pero mostraria un error si se escribe otra cosa.</p>
    <div id="ejemplo">
        <h2>Visualizador de imagen</h2>
        <p></p>
        <input type="text" v-model="valorBusqueda" placeholder="Ingrese el valor a buscar">
        <p></p>
        <div class="resultado" v-if="valorBusqueda.toLocaleLowerCase() === 'gato'">
            <img src="@/assets/images/cat.jpeg" alt="foto de gato">
        </div>
        <div class="resultado" v-else-if="valorBusqueda.toLocaleLowerCase() === 'perro'">
            <img src="@/assets/images/dog.jpg" alt="foto de perro">
        </div>
        <div class="resultado" v-else-if="valorBusqueda.toLocaleLowerCase() === 'rickroll'">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="resultado" v-else-if="valorBusqueda === ''">
            <p>Por favor coloque algo en la barra de busqueda</p>
        </div>
        <div class="resultado" v-else>
            <p>No tenemos imagenes de {{ valorBusqueda }}</p>
        </div>
        <p></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      valorBusqueda: '',
    };
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

#ejemplo input {
    width: 30%;
}

#ejemplo .resultado {
    margin: 0 auto;
    border: 3px black solid;
    border-radius: 20px;
    width: 30%;
    height: auto;
    overflow: hidden;
}

#ejemplo .resultado * {
    width: 100%;
    margin: 0;
}
#ejemplo .resultado p {
    margin: 10px;
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