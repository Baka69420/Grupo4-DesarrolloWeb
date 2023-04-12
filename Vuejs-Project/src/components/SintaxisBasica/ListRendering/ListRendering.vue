<template>
    <h1>List Rendering</h1>
    <h2>Descripcion:</h2>
    <p>Este es utilizado para que con facilidad se recorra una lista y se duplique una etiqueta por cada item en una lista.<br></p>
    <h2>Ejemplo:</h2>
    <p>En el siguiente ejemplo tendremos una lista llama listado, que es un listado de objetos JavaScript con nombre de producto y cantidad.</p>
    <p>En este caso debajo del titulo tenemos una unica etiqueta "p" con el atributo v-for, el cual tiene un sintaxis similar al for de JavaScript y se puede hacer un for..of/in facilmente para recorrer la lista.</p>
    <p>Dentro del v-for se coloca lo que usualmente se colocaria en el parentesis de un for, y con esto Vue.js se encarga de duplicar la etiqueta "p" por cada item del listado, y para mostrar los datos, dentro del innertext se hace un <router-link :to="{name: 'attribute-bindings'}">Attribute Binding</router-link> tomando en cuenta que estamos utilizando un dato obtenido del for y no la lista completa.</p>
    <div id="ejemplo">
        <h2>Lista de compras</h2>
        <p v-for="item in listado">{{ item.cantidad }} de {{ item.producto }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      listado: [{producto: "Atun Suli", cantidad: "2"}, {producto: "Te Frio Suli", cantidad: "4"}, {producto: "Cloro Suli", cantidad: "1"}, {producto: "Salchichas Suli", cantidad: "1"}, {producto: "Fosforos Suli", cantidad: "1"}],
    };
  }
}
</script>

<style>
h1 {
    text-align: center;
}

#ejemplo {
    text-align: center;
    padding: 5px;
    border: 1px solid black;
}
</style>