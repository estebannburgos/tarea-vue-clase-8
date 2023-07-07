<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 align="center">Datos ingresados</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Email</th>
              <th>Cursos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in formData" :key="index">
              <td>{{ user.nombre }}</td>
              <td>{{ user.apellido }}</td>
              <td>{{ user.edad }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.cursos }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  // props: ['users']
  computed: {
    ...mapState(['formData'])
    // formData() {
    //   return this.$store.state.formData;
    // }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchFormData');
    }
  }
  // created() {
  //   this.$store.dispatch('fetchFormData');
  // }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>
