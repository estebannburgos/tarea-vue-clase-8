<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 align="center">Formulario</h2>
        <form @submit.prevent="submitForm" ref="form" class="needs-validation">
          <div class="form-group">
            <label class="form-label" for="nombre">Nombre:</label>
            <input v-model="formData.nombre" type="text" id="nombre" class="form-control" :class="{'is-invalid': formState.nombreInvalid}" @input="validateNombre" required>
            <div class="invalid-feedback" v-if="formState.nombreInvalid">Ingrese un nombre válido.</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="apellido">Apellido:</label>
            <input v-model="formData.apellido" type="text" id="apellido" class="form-control" :class="{'is-invalid': formState.apellidoInvalid}" @input="validateApellido" required>
            <div class="invalid-feedback" v-if="formState.apellidoInvalid">Ingrese un apellido válido.</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="edad">Edad:</label>
            <input v-model="formData.edad" type="number" id="edad" class="form-control" :class="{'is-invalid': formState.edadInvalid}" @input="validateEdad" required>
            <div class="invalid-feedback" v-if="formState.edadInvalid">La edad debe ser mayor a 1.</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="email">Email:</label>
            <input v-model="formData.email" type="email" id="email" class="form-control" required>
            <div class="invalid-feedback">Ingrese un email válido.</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="cursos">Cursos: </label>
            <div class="form-check form-check-inline">
              <label class="form-check-label" id="curso1">
                <input v-model="formData.cursos" type="checkbox" id="curso1" class="form-check-input" value="Desarrollo Web"> Desarrollo Web
              </label>
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label" id="curso2">
                <input v-model="formData.cursos" type="checkbox" id="curso2" class="form-check-input" value="Javascript"> Javascript
              </label>
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label" id="curso3">
                <input v-model="formData.cursos" type="checkbox" id="curso3" class="form-check-input" value="Vue Js"> Vue Js
              </label>
            </div>
          </div>
          <div class="col-md-12" align="center">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
        cursos: []
      },
      formState: {
        nombreInvalid: false,
        apellidoInvalid: false,
        edadInvalid: false
      }
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.checkValidity()) {
        this.$emit('emit-form', this.formData);
        this.resetForm();
      } else {
        this.$refs.form.classList.add('was-validated');
      }
    },
    resetForm() {
      this.formData = {
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
        cursos: []
      };
      this.formState = {
        nombreInvalid: false,
        apellidoInvalid: false,
        edadInvalid: false
      };
      this.$refs.form.classList.remove('was-validated');
    },
    validateNombre() {
      this.formState.nombreInvalid = this.formData.nombre.length < 2;
    },
    validateApellido() {
      this.formState.apellidoInvalid = this.formData.apellido.length < 2;
    },
    validateEdad() {
      this.formState.edadInvalid = parseInt(this.formData.edad) <= 1;
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
.form-label {
  margin-right: 10px;
}
.form-group {
  margin-top: 5px;
}
</style>