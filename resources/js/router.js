import Vue from "vue";
import TestPage from './pages/TestPage.vue'
import Router from "vue-router"


Vue.use(Router);

const routes = [
  {
    path: '/vue-route',
    component: TestPage,
  }
]


export default new Router({
    mode: 'history',
    routes
})
