<template>
    <div>
        <h1>Formulario</h1>
    </div>
    <div>
    <input type="text" v-model="nombre" placeholder="Ingrese su nombre">
    <input type="email" v-model="correo" placeholder="Ingrese su correo electrónico">
    <input type="password" v-model="contrasena" placeholder="Ingrese su contraseña">
    <input type="number" v-model="edad" placeholder="Ingrese su edad">
    <label>
    <input type="checkbox" v-model="isChecked">
      
      <a href="#terminos" target="_blank">Acepto los Términos y Condiciones</a>
    </label>
    <button @click="enviarFormulario">Enviar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      contrasena: '',
      edad: null,
      aceptoTerminos: false
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
    }
  }
}
</script>

<style>


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
#check{
    float: left;
}
#terminos{
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
  background-color: #007bff;
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