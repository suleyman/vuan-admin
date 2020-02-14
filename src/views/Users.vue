<template>
  <div class="users">
    <h1>Users page</h1>
    <a-table :columns="columns" :dataSource="userList">
    <span slot="name" slot-scope="name">{{ name }}</span>
    <span slot="email" slot-scope="email">{{ email }}</span>
    <span slot="action">
      <a-button type="danger" shape="circle" icon="delete"></a-button>
    </span>
  </a-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AxiosPromise } from 'axios';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];
export default Vue.extend({
  data () {
    return {
      columns,
      userList: []
    }
  },
  mounted () {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers () {
      const response = await this.$http.get('https://jsonplaceholder.typicode.com/users');
      this.userList = response.data
    }
  }
});
</script>