<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div id="title">
      <img src="./assets/logo.svg" alt="Vue.js logo">
      <p>Equipo 4 - Client-Side Framework Vue.js</p>
    </div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
        <li class="nav-item"><router-link class="nav-link" :to="{name: 'home'}">Home</router-link></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Sintaxis Basica</a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" :to="{name: 'text-interpolation'}">Text Interpolation</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'raw-html'}">Raw HTML</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'attribute-bindings'}">Attribute Bindings</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'javascript-expressions'}">JavaScript Expressions</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'directives'}">Directives</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'conditional-rendering'}">Conditional Rendering</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'list-rendering'}">List Rendering</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'event-handling'}">Event Handling</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'form-input-bindings'}">Form Input Bindings</router-link></li>
          </ul>
        </li>
        <li class="nav-item"><router-link class="nav-link" :to="{name: 'about'}">About</router-link></li>
      </ul>
      </div>
    </nav>
    
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <div id="info-estudiantes">
      <p>Este sitio fue creado por los Estudiantes:</p>
      <ul id="estudiantes">
        <li>Andrey Jimenez Porras</li>
        <li>Rafael Eduardo Alvarado Zuñiga</li>
        <li>Rodrigo Ugalde Calix</li>
        <li>Santiago Gerardo Alvarez Alvarez</li>
      </ul>
    </div>
    <h2>Equipo 4 <br> Client-Side Framework Vue.js</h2>
    <div id="info-curso">
      <p>Curso:</p>
      <p>Diseno de Aplicaciones Web (ISW-512)</p>
      <br>
      <p>Profesor:</p>
      <p>Sergio Enrique Gonzalez Salazar</p>
    </div>
  </footer>
</template>

<style scoped>
h2 {
  text-align: center;
}

#title {
  width: 100%;
  height: 75px;
  background-color: grey;
  display: flex;
  align-items: center;
}

#title img {
  height: 60px;
  width: auto;
  margin-left: 15px;
}

#title p {
  margin-right: 15px;
  margin-left: auto;
}

main {
  padding: 20px;
}

footer {
  background-color: grey;
  padding: 15px;
  display: flex;
  align-items: center;
}

footer p {
  margin: 0;
  padding: 0;
}

footer div {
  margin: 20px;
  border: 2px black solid;
  padding: 5px;
}

footer #info-estudiantes {
  margin-left: 0;
  margin-right: auto;
}

footer #info-curso {
  margin-right: 0;
  margin-left: auto;
}

</style>