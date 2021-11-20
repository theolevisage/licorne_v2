import path from 'path/posix';
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router';


import Home from '../views/home.vue';
import Register from '../views/register.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
      requireBeAdmin: false
    }
  },
  {
    path: '/register',
    name: 'Registrer',
    component: Register,
    meta: {
      requiresAuth: true,
      requireBeAdmin: false
    }
  }
]

const router = createRouter({
  history: createWebHistory((import.meta.env.VITE_BASE_URL === undefined || import.meta.env.VITE_BASE_URL === false || import.meta.env.VITE_BASE_URL === true) ? '/' : import.meta.env.VITE_BASE_URL),
  routes
})

router.beforeEach( (to, from, next) => {
  next();
})

export default router