<template>
  <div class="contact">
    <h1>Información de Contacto</h1>
  </div>
  <div class="box-contact">
    <label>Nombre</label>
    <input type="text">
    <label>Correo</label>
    <input type="text">
    <label>Mensaje</label>
    <input id="message" type="text">
    <button>Enviar Mensaje</button>

  </div>
</template>

<script>
export default {
  name: 'ContactView', // Cambia a nombre multi-palabra
};
</script>

<style scoped>
.box-contact{
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  margin-left: 350px;
  margin-top: 10px;
  border: 1px solid #212121;
}

label{
  text-align: left;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold ;
}

button{
  width: 50%;
  margin-top: 15px;
  margin-left: 120px;
}

#message{
  height: 120px;
}
</style>