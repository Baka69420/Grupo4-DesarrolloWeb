<template>
    <h1>Event Handling</h1>
    <h2>Descripcion:</h2>
    <p>Cuando estamos en una pagina web, aunque no lo notemos, en el momentos que hacemos click o colocamos el mouse en alguna parte, lo que estamos haciendo es crear eventos, con estos eventos se puede correr metodos y por ende se puede crear funciones unicas en la pagina web.<br></p>
    <h2>Ejemplo:</h2>
    <p>En este ejemplo, lo primero que tenemos que hacer agregar en el area de script los metodos, esto para que en el momento que coloquemos una etiqueta v-on, se pueda utilizar algunos de los metodos creados.</p>
    <p>En este caso, se crearon 3 metodos, "onMouseClick()", "onMouseEnter()" y "onMouseLeave()" los cuales nos van a llevar un conteo de las estadisticas que se pueden ver abajo</p>
    <div id="ejemplo">
        <h2>Conteo de Estadistica</h2>
        <p>Clicks: <strong>{{ clicks }}</strong></p>
        <p>Enters: <strong>{{ enters }}</strong></p>
        <p>Leaves: <strong>{{ leaves }}</strong></p>
        <p></p>
        <div id="caja"
        v-on:click="onMouseClick()"
        v-on:mouseenter="onMouseEnter()"
        v-on:mouseleave="onMouseLeave()"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      clicks: 0,
      enters: 0,
      leaves: 0,
    };
  },
  methods: {
    onMouseClick() {
        this.clicks++;
    },
    onMouseEnter() {
        this.enters++;
    },
    onMouseLeave() {
        this.leaves++;
    },
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

#caja {
    height: 200px;
    width: 200px;
    margin: 0 auto;
    background-color: blueviolet;
    border-radius: 10px;
    border: 2px solid black;
}
</style>