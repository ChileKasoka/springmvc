import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemList from '@/components/ItemList.vue';
import ItemForm from '@/components/ItemForm.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ItemList },
  { path: '/create', component: ItemForm },
  { path: '/edit/:id', component: ItemForm }
];

const router = new VueRouter({
  routes
});

export default router;
