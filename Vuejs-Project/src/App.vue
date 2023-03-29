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
    <p>Estudiantes:</p>
    <p>Andrey Jimenez Porras</p>
    <p>Rafael Eduardo Alvarado Zuñiga</p>
    <p>Rodrigo Ugalde Calix</p>
    <p>Santiago Gerardo Alvarez Alvarez</p>
  </footer>
</template>

<style scoped>
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


</style>