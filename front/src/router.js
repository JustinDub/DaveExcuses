import Vue from "vue";
import Router from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import Lost from './components/Lost.vue'

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HelloWorld
    },
    {
      path: "/lost",
      component: Lost
    },
    {
      path: "/*",
      component: Lost
    },
    {
      path: "/:http_code",
      component: Lost
    }
  ]
});