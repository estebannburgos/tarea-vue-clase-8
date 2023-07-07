import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: []
  },
  mutations: {
    setFormData(state, formData) {
      state.formData = formData;
    }
  },
  actions: {
    submitFormData(context, formData) {
      axios.post('https://64a74038096b3f0fcc8131f2.mockapi.io/usuarios/', formData)
        .then(response => {
          context.commit('setFormData', response.data);
        })
        .catch(error => {
          console.error('Error al enviar los datos:', error);
        });
    },
    fetchFormData(context) {
      axios.get('https://64a74038096b3f0fcc8131f2.mockapi.io/usuarios/')
        .then(response => {
          context.commit('setFormData', response.data);
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    }
  }
});
