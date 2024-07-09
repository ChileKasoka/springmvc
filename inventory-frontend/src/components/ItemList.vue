<template>
  <div>
    <h1>Inventory Items</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <button @click="editItem(item.id)">Edit</button>
            <button @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="createNewItem">Create New Item</button>
  </div>
</template>

<script>
import ItemService from '@/ItemService';

export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      ItemService.getItems().then(response => {
        this.items = response.data;
      });
    },
    createNewItem() {
      this.$router.push('/create');
    },
    editItem(id) {
      this.$router.push(`/edit/${id}`);
    },
    deleteItem(id) {
      ItemService.deleteItem(id).then(() => {
        this.fetchItems();
      });
    }
  }
};
</script>
