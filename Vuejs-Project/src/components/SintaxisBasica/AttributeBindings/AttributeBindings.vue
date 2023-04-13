<template>
    <div id="app">
        <h1>Attribute Binding en Vue.js</h1>
        <div class="ejemplos">


            <h2>Ejemplo de Class Binding</h2>
            <p :class="{ rojo: esRojo, azul: esAzul }">Este texto puede ser rojo o azul</p>
            <button @click="cambiarColorA">Cambiar Color</button>
        </div>
        <div class="ejemplos">
            
            <h2>Ejemplo de Style Binding</h2>
            <input type="number" id="numero" v-model.number="tamanoTexto">
            <p :style="{ color: colorTexto, fontSize: tamanoTexto + 'px' }">Este texto puede tener diferentes estilos</p>
            <button @click="cambiarColor">Cambiar Color</button>

        </div>
        <div class="ejemplos">
            <h2>Ejemplo de Attribute Binding</h2>
            <input type="text" :disabled="botonDesactivado" placeholder="Escribe aquí" />
            <button @click="toggleBotonDesactivado">Toggle Input Desactivado</button>
        </div>

        <div class="ejemplos">
            <h2>Ejemplo de Table Binding</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Correo electrónico</th>
                        <th>Resaltar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="persona in personas" :key="persona.id" :class="{ resaltado: persona.resaltado }">
                        <td>{{ persona.id }}</td>
                        <td>{{ persona.nombre }}</td>
                        <td>{{ persona.edad }}</td>
                        <td>{{ persona.correo }}</td>
                        <td>
                            <button @click="resaltarPersona(persona)">Resaltar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script >
export default {

    data() {
        return {
            esRojo: true,
            esAzul: false,
            colorTexto: 'green',
            tamanoTexto: 20,
            botonDesactivado: true,
            personas: [
                { id: 1, nombre: 'Juan', edad: 25, correo: 'juan@gmail.com', resaltado: false },
                { id: 2, nombre: 'María', edad: 30, correo: 'maria@gmail.com', resaltado: false },
                { id: 3, nombre: 'Pedro', edad: 40, correo: 'pedro@gmail.com', resaltado: false }
            ]
        };
    },
    methods: {
        toggleBotonDesactivado: function () {
            this.botonDesactivado = !this.botonDesactivado;
        },
        cambiarColor: function () {
            this.colorTexto = this.colorTexto === 'green' ? 'purple' : 'green';
        },
        cambiarColorA: function () {
            if (this.esRojo) {
                this.esRojo = false;
                this.esAzul = true;
            }
            else {
                this.esRojo = true;
                this.esAzul = false;
            }
        },
        resaltarPersona: function (persona) {
            persona.resaltado = !persona.resaltado;
        }
    }
}
</script>

<style>
/* Estilos para la tabla */
.ejemplos {
    margin: 60px;
}

table {
    border-collapse: collapse;
    width: 100%;
}
#numero{
    width: 10%;
}
th,
td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
    color: #333;
    font-weight: bold;
}

.rojo {
    color: red;
}

.azul {
    color: blue;
}

.resaltado {
    background-color: yellow;
}
</style>