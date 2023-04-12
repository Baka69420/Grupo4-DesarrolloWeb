<template>
    <h1>JavaScript Expressions</h1>
    <h2>Descripcion:</h2>
    <p>Esto no es completamente parte de Vue.js, es mas parte del sintaxis de JavaScript, pero si es muy importante de saber ya que es la manera de como calculan datos y se coloca la informacion en las variables.<br></p>
    <h2>Ejemplo:</h2>
    <p>En el siguiente ejemplo veremos el espacio de resultado que es una variable que usa<router-link :to="{name: 'attribute-bindings'}">Attribute Bindings</router-link></p>
    <p>Dicha variable va a ser modificada por medio de un metodo cuando se precione el boton calcular.</p>
    <p>Dicho metodo unicamente va a hacer uso de expresiones de aritmetica para realizar la suma y expresiones de asignacion para asignar el valor de la suma en la variable resultado.</p>
    <div id="ejemplo">
        <p>resultado: <strong>{{resultado}}</strong></p>
        <p>expresion: <strong>{{valor1 + " + " + valor2}}</strong></p>
        <p>valor1: <strong>{{valor1}}</strong></p>
        <p>valor2: <input type="number" min="0" max="100" v-model="valortemp"></p>
        <button v-on:click="actualizarValores()">Calcular</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      valor1: 12,
      valor2: 0,
      valortemp: 0,
      resultado: 0,
    };
  },
  methods: {
    actualizarValores() {
        this.valor2 = this.valortemp;
        this.resultado = this.valor1 + this.valor2;
    }
  },
  beforeMount() {
    this.actualizarValores();
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

#ejemplo input {
    width: 100px;
}

#ejemplo button {
    background-color: lightgray;
    color: black;
    padding: 10px;
    border-radius: 10px;
}

#ejemplo button:hover {
    background-color: grey;
    color: white;
}
</style>