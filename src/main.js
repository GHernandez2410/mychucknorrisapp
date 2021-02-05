import Vue from 'vue'
import VueMaterial from 'vue-material'
import SocialSharing from 'vue-social-sharing'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'vue-material/dist/vue-material.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import store from './store'
import router from './router'

import App from './App.vue'

Vue.use(VueMaterial)

Vue.use(SocialSharing)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: {App},
  render: h => h(App)
})
