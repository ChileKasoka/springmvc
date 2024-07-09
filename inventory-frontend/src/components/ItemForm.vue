<template>
  <div>
    <h1>{{ isEdit ? 'Edit' : 'Create' }} Item</h1>
    <form @submit.prevent="saveItem">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="item.name" id="name" required />
      </div>
      <div>
        <label for="description">Description</label>
        <input type="text" v-model="item.description" id="description" required />
      </div>
      <div>
        <label for="quantity">Quantity</label>
        <input type="number" v-model="item.quantity" id="quantity" required />
      </div>
      <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
    </form>
  </div>
</template>

<script>
import ItemService from '@/ItemService';

export default {
  data() {
    return {
      item: {
        name: '',
        description: '',
        quantity: 0
      },
      isEdit: false
    };
  },
  created() {
    if (this.$route.params.id) {
      this.isEdit = true;
      ItemService.getItem(this.$route.params.id).then(response => {
        this.item = response.data;
      });
    }
  },
  methods: {
    saveItem() {
      if (this.isEdit) {
        ItemService.updateItem(this.$route.params.id, this.item).then(() => {
          this.$router.push('/');
        });
      } else {
        ItemService.createItem(this.item).then(() => {
          this.$router.push('/');
        });
      }
    }
  }
};
</script>
