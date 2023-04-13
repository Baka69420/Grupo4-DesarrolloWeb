<template>
    <div class="ejemplos">
        <h1>Texto</h1>
        <p>El mensaje es: {{ message }}</p>
        <input v-model="message" placeholder="Añade un texto" />
    </div>

    <div class="ejemplos">
        <h1>Text Area</h1>
        <span>Texto de varias lineas:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea class="textarea" v-model="message" placeholder="Añade diferentes lineas"></textarea>
    </div>

    <div class="ejemplos">
        <h1>Check box</h1>
        <div>Paises: {{ checkedNames }}</div>

        <input type="checkbox" class="paises" value="costarica" v-model="checkedNames">
        <label class="paisesnombre" for="costarica">Costa Rica</label>

        <input type="checkbox" class="paises" value="nicaragua" v-model="checkedNames">
        <label class="paisesnombre" for="nicaragua">Nicaragua</label>

        <input type="checkbox" class="paises" value="panama" v-model="checkedNames">
        <label class="paisesnombre" for="panama">Panama</label>
    </div>
    <div class="ejemplos">
        <h1>Check Box con un valor preterminado cuando es verdadero o falso.</h1>
        
        <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    
    </div>

    <div class="ejemplos">
        <h1>Radius botton</h1>
        <div>Precionado: {{ picked }}</div>

        <input type="radio" class="radio" value="Uno"  v-model="picked"  />
        <label class="label" for="uno">Uno</label>
        <input type="radio" class="radio" value="Dos" v-model="picked" />
        <label class="label" for="dos">Dos</label>
    </div>
    <div class="ejemplos">
        <h1>Combo Box</h1>
        <div>Seleccionado: {{ selected }}</div>
        <select v-model="selected">
            <option disabled value="">Seleccione uno:</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>
    <div class="ejemplos">
        <h1>Combo box llenada con una lista</h1>
        <select v-model="selected">
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>
        <div>Seleccionado: {{ selected }}</div>
    </div>

    <div class="ejemplos">
        <h1>Lista de seleccion</h1>
        <div>Seleccionado: {{ selected }}</div>
        <select v-model="selected" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>


    <div class="ejemplos">
     
      <form @submit.prevent="submitForm">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model.lazy="form.name" />
      <p>Nombre: "{{ form.name }}"</p>
    </form>

    </div>

    <div class="ejemplos">
        <input v-model.number="age" />
    </div>
    <div class="ejemplos">
        <input v-model.trim="msg"  @input="onInputChange"/>
        <p>Texto sin espacios en blanco: "{{ trimmedMsg }}"</p>
    </div>
    <div class="ejemplos">

    </div>
    <div>
        <h1>Formulario</h1>
    </div>
    <div>
        <input type="text" v-model="nombre" placeholder="Ingrese su nombre">
        <input type="email" v-model="correo" placeholder="Ingrese su correo electrónico">
        <input type="password" v-model="contrasena" placeholder="Ingrese su contraseña">
        <input type="number" v-model="edad" placeholder="Ingrese su edad">
       
    </div>
    
    <label>
            <input type="checkbox" v-model="isChecked">

            <a href="#terminos" target="_blank">Acepto los Términos y Condiciones</a>
        </label>
        <button @click="enviarFormulario">Enviar</button>
</template>

<script>
export default {
   
    data() {
        return {

            nombre: '',
            correo: '',
            contrasena: '',
            edad: null,
            aceptoTerminos: false,
            selected: 'A',
            options: [
                { text: 'UNO', value: 'A' },
                { text: 'DOS', value: 'B' },
                { text: 'TRES', value: 'C' }
            ],
            msg: "",
        trimmedMsg: "",
        name: "",
        };
    },
    methods: {
        enviarFormulario() {
            // Lógica de envío del formulario
            // Puedes acceder a los valores ingresados por el usuario a través de las propiedades de datos
            console.log('Nombre:', this.nombre);
            console.log('Correo:', this.correo);
            console.log('Contraseña:', this.contrasena);
            console.log('Edad:', this.edad);
            console.log('Acepto términos:', this.aceptoTerminos);
            
        },
        onInputChange() {
                this.trimmedMsg = this.msg.replace(/\s+/g, ""); // Eliminar espacios en blanco
            }
        
    }
    
}






</script>

<style>
.ejemplos {
    margin: 40px;
    width: 70%;
}

.textarea {
    width: 70%;
}
.radio{
    width: 20%;
}
.label{
    width: 80%;
    padding-right: 100px;    
}
.paises{
    width: 15%;
    margin-right: 10px;
}
.paisesnombre{

text-align: right;
 
}

/* Estilos para los campos de entrada */
div input {
    width: 70%;
    padding: 10px;
    margin-bottom: 10px;
}

/* Estilos para los botones */
div button {
    width: 25%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

/* Estilos para los campos de entrada deshabilitados */
div input:disabled {
    background-color: #f8f8f8;
    cursor: not-allowed;
}

#check {
    float: left;
}


label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

a {
    padding: 10px;
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: none;
    text-decoration: underline;
}

input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    background-color: #fff;
    cursor: pointer;
}

input[type="checkbox"]:checked {
    background-color: green;
    border-color: #007bff;
}

input[type="checkbox"]:checked::after {
    content: "\2713";
    font-size: 18px;
    color: #fff;
    position: absolute;
    top: 3px;
    left: 5px;
}
</style>