import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import VueForm from 'vue-form'
import store from './store'
import router from './router';

Vue.config.productionTip = false
Vue.use(VueForm);

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
