import Vue from "vue";
import Router from "vue-router"
import Home from './pages/admin-pages/Home.vue'


Vue.use(Router);
Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/products',
    component: () => import('./pages/admin-pages/Products.vue'),
    name: 'products'
  },
  {
    path: '/providers',
    component: () => import('./pages/admin-pages/Providers.vue'),
    name: 'products'
  },
  {
    path: '/users',
    component: () => import('./pages/admin-pages/Users.vue'),
    name: 'users'
  },
  {
    path: '/login',
    component: () => import('./pages/Login.vue'),
    name: 'login'
  },
  {
    path: '/roles',
    component: () => import('./pages/admin-pages/Roles.vue'),
    name: 'roles'
  },
  {
    path: '/assignRole',
    component: () => import('./pages/admin-pages/assignRole.vue'),
    name: 'assignRole'
  },
]

export default new Router({
    mode: 'history',
    routes
})
