import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Lists from '../components/Lists.vue';
import InfoCard from '../components/InfoCard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/people',
    name: 'People',
    component: Lists
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Lists
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Lists
  },
  {
    path: '/people/:id',
    name: 'Character',
    component: InfoCard
  },
  {
    path: '/planets/:id',
    name: 'Planet',
    component: InfoCard
  },
  {
    path: '/starships/:id',
    name: 'Starship',
    component: InfoCard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
