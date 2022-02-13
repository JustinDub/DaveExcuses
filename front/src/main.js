import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Lost from './components/Lost.vue'
import NotFound from './components/NotFound.vue'
import HttpCode from './components/HttpCode.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
  { path: "/lost", component: Lost },
  { path: "*", component: NotFound },
  { path: "/:http_code(7\\d\\d)", component: HttpCode }
]

new Vue({
  router: new VueRouter({
    routes
  }),
  render: h => h(App),
}).$mount('#app')
