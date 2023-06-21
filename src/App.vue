<template>
  <main>
    <FormComponent @emit-form="addUser" />
    <TableComponent :users="users" />
  </main>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue';
import FormComponent from '@/components/FormComponent.vue';

export default {
  name: 'App',
  components: {
    TableComponent,
    FormComponent
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    addUser(user) {
      this.users.push(user);
    }
  }
};
</script>
