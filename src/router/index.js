import Vue from 'vue';
import Router from 'vue-router';
import FormComponent from '@/components/FormComponent.vue';
import TableComponent from '@/components/TableComponent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: FormComponent
    },
    {
      path: '/table',
      component: TableComponent
    }
  ]
});
