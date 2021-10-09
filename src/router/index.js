import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import History from '@/pages/History';
import Contact from '@/pages/Contact';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
