<template>
    <h1>HOME PAGE</h1>
    <p>En esta pagina web se va a aprender sobre el sintaxis basico de Vue.js, en este caso se esta realizacion por medio de ejemplos segun cada termino, los cuales son los siguientes:</p>
    <br>
    <div>
        <br>
        <h2>Ejemplo 1 - Text Interpolation</h2>
        <p>Definicion: Hace cosas</p>
        <button><router-link class="dropdown-item" :to="{name: 'text-interpolation'}">Ver Ejemplo de Text Interpolation</router-link></button>
    </div>
    <div>
        <br>
        <h2>Ejemplo 2 - Raw HTML</h2>
        <p>Definicion: Hace cosas</p>
        <button><router-link class="dropdown-item" :to="{name: 'raw-html'}">Ver Ejemplo de Raw HTML</router-link></button>
    </div>
    <div>
        <br>
        <h2>Ejemplo 3 - Attribute Bindings</h2>
        <p>Definicion: Hace cosas</p>
        <button><router-link class="dropdown-item" :to="{name: 'attribute-bindings'}">Ver Ejemplo de Attribute Bindings</router-link></button>
    </div>
    <div>
        <br>
        <h2>Ejemplo 4 - JavaScript Expressions</h2>
        <p>Definicion: Hace cosas</p>
        <button><router-link class="dropdown-item" :to="{name: 'javascript-expressions'}">Ver Ejemplo de JavaScript Expressions</router-link></button>
    </div>
    <div>
        <br>
        <h2>Ejemplo 5 - Directives</h2>
        <p>Definicion: Hace cosas</p>
        <button><router-link class="dropdown-item" :to="{name: 'directives'}">Ver Ejemplo de Directives</router-link></button>
    </div>
    <div>
        <br>
        <h2>Ejemplo 6 - Conditional Rendering</h2>
        <p>Definicion: Hace cosas</p>
        <button><router-link class="dropdown-item" :to="{name: 'conditional-rendering'}">Ver Ejemplo de Conditional Rendering</router-link></button>
    </div>
    <div>
        <br>
        <h2>Ejemplo 7 - List Rendering</h2>
        <p>Definicion: Hace cosas</p>
        <button><router-link class="dropdown-item" :to="{name: 'list-rendering'}">Ver Ejemplo de List Rendering</router-link></button>
    </div>
    <div>
        <br>
        <h2>Ejemplo 8 - Event Handling</h2>
        <p>Definicion: Hace cosas</p>
        <button><router-link class="dropdown-item" :to="{name: 'event-handling'}">Ver Ejemplo de Event Handling</router-link></button>
    </div>
    <div>
        <br>
        <h2>Ejemplo 9 - Form Input Bindings</h2>
        <p>Definicion: Hace cosas</p>
        <button><router-link class="dropdown-item" :to="{name: 'form-input-bindings'}">Ver Ejemplo de Form Input Bindings</router-link></button>
    </div>
</template>

<style scoped>
div, h1, h2, p, a {
    text-align: center;
}

button {
    padding: 10px;
    border-radius: 10px;
    background-color: lightgray;
    color: black;
}

button:hover {
    background-color: grey;
    color: white;
}
</style>