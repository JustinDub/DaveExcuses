import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Lost from './components/Lost.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
  { path: "/lost", component: Lost },
  { path: "/*", component: Lost },
  { path: "/:http_code", component: Lost }
]

new Vue({
  router: new VueRouter({
    routes
  }),
  render: h => h(App),
}).$mount('#app')
